import { Routes, Route, Outlet } from 'react-router-dom';
import '../../assets/css/global.css';
import PresentationHeader from '../../components/ui/headers/PresentationHeader';
// import SideNavbar from '../../components/ui/navigation/sidebar/SideNavbar';

import NotFoundPage from '../(layerTwo)/notFound/NotFoundPage';
import HomePage from '../(layerTwo)/home/HomePage';
import Prueba from '../(layerTwo)/prueba/Prueba';
import AdminPage from '../(layerOne)/admin/LOAdmin';
import SurveysPage from '../(layerOne)/surveys/LOSurveys';
import SignUpPage from '../(layerTwo)/signUp/SignUpPage';
import SignInPage from '../(layerTwo)/signIn/SignInPage';
import AddAdminPage from '../(layerTwo)/claims/AddAdminPage';
import BarAndContainer from '../../components/ui/layout/sideBar/BarAndContainer';

import { fromLayerZeroGetUserInfo } from '../../redux/slices/auth/layerZero/authSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { auth } from '../../lib/sdk/firebase';

function PublicLayout() {
	return (
		<>
			<Outlet />
		</>
	)
}

function AdminLayout() {
	const dispatch = useDispatch()
	const userClaim = useSelector(state => state.gAuth.userClaim)
	const loadingAuthSDK = useSelector(state => state.gAuth.loadingAuthSDK)
	const errorInAuthSDK = useSelector(state => state.gAuth.errorInAuthSDK)

	useEffect(() => {
		dispatch(fromLayerZeroGetUserInfo)
	}, [dispatch, auth])

	return (
		<BarAndContainer>
			<div className="Admin__contentContainer">
				{/* {
					loadingAuthSDK && <p>cargando...</p>
				}
				{
					userClaim === 'admin' && (
						<> */}
							<Outlet />
						{/* </>
					)
				}
				{
					errorInAuthSDK && <p>{JSON.stringify({err: errorInAuthSDK})}</p>
				} */}
			</div>
		</BarAndContainer>
	)
}


export default function Page() {
	return (
		<Routes>
			<Route element={<PublicLayout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/crear-cuenta" element={<SignUpPage />} />
				<Route path="/iniciar-sesion" element={<SignInPage />} />
				<Route path="/pruebas" element={<Prueba />} />
			</Route>

			<Route path="/admin" element={<AdminLayout />}>
				<Route index element={<AdminPage />} />
				<Route path="encuestas" element={<SurveysPage />} />
				<Route path="anadir-admin" element={<AddAdminPage />} />
			</Route>

			{/* Ruta para 404 */}
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	)
}