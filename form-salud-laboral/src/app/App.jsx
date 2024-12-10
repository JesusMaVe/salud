import { Routes, Route } from 'react-router-dom'
import '../assets/css/index.css'

import NotFoundPage from './routes/notFound/NotFoundPage'
import EmployeeForm from './routes/employeeForm/EmployeeForm'
import EnterpriseForm from './routes/enterpriseForm/EnterpriseForm'
import SignInPage from './routes/auth/signin/SignInPage'
import SignUpPage from './routes/auth/signup/SignUpPage'
import AddAdminPage from './routes/auth/claims/AddAdminPage'


export default function Page() {
	const pagesDirectory = {
		notFound: <NotFoundPage />,
		employeeForm: <EmployeeForm />,
		enterpriseForm: <EnterpriseForm />,
		signInPage: <SignInPage />,
		signUpPage: <SignUpPage />,
		addAdminPage: <AddAdminPage />,
	}

	return (
		<div className="body">
			<Routes>
				<Route
					path="*"
					element={pagesDirectory.notFound}
				/>{/*  UI response for not valid path segment  */}
				<Route
					path="/registrar-empresa"
					element={pagesDirectory.enterpriseForm}
				/>
				<Route
					path="/registrar-empleado"
					element={pagesDirectory.employeeForm}
				/>
				<Route
					path="/iniciar-sesion"
					element={pagesDirectory.signInPage}
				/>
				<Route
					path="/crear-cuenta"
					element={pagesDirectory.signUpPage}
				/>
				<Route
					path="/anadir-admin"
					element={pagesDirectory.addAdminPage}
				/>
			</Routes>
		</div>
	)
}
