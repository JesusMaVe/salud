import { firestore } from '../../../lib/sdk/firebase'
import { where } from 'firebase/firestore'
import { useFirestore } from '../../../lib/hooks/useFirestoreSnapshot'
import { useEntitiesJoin } from '../../../lib/hooks/useEntitiesJoin'
import ColumnComponent from '../../../components/retrieving/surverys/columnsUI/ui/ColumnComponent'
import GroupCard from '../../../components/retrieving/surverys/groupsUI/GroupCard'
import StudentEmployeeCard from '../../../components/retrieving/surverys/studentEmployeeUI/StudentEmployeeCard'
import ScrollEffect from '../../../components/retrieving/surverys/columnsUI/ui/ScrollEffect'
import { useEffect, useState } from 'react'
import '../../../components/(completePages)/surveys/styles/SurveyPageUI.css'


export default function SurveyPageUI() {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const [enterpriseTuples, setEnterpriseTuples] = useState([])
	const [groupsTuples, setGroupsTuples] = useState([])
	const [studentsTuples, setStudentsTuples] = useState([])

	const [joinOne, setJoinOne] = useState([])
	const [joinTwo, setJoinTwo] = useState([])


	useEffect(() => {
		if (setEnterpriseTuples === undefined) {
			console.log('esperando montamiento de componente')
			return
		}
		// const expectedId = "empresa_id"
		const unsub = useFirestore(
			firestore,
			"empresa",
			setEnterpriseTuples,
			setLoading,
			setError,
			[],
			[]
		)
		return unsub
	}, [setEnterpriseTuples])

	useEffect(() => {
		if (setGroupsTuples === undefined) {
			console.log('esperando montamiento de componente')
			return
		}
		// const expectedId = "grupo_id"
		const unsub = useFirestore(
			firestore,
			"grupo",
			setGroupsTuples,
			setLoading,
			setError,
			[],
			[enterpriseTuples, enterpriseTuples.data, useFirestore]
		)
		return unsub
	}, [enterpriseTuples])

	useEffect(() => {
		if (setStudentsTuples === undefined) {
			console.log('esperando montamiento de componente')
			return
		}
		// const expectedId = "alumno_id"
		const unsub = useFirestore(
			firestore,
			"alumno",
			setStudentsTuples,
			setLoading,
			setError,
			[where("grupo_id", "==", "quintoA2024")],
			[groupsTuples, useFirestore]
		)
		return unsub
	}, [groupsTuples])

	// useEffect(() => {
	// 	function logging() {
	// 		console.log('ENTERPRISE --------')
	// 		console.log(enterpriseTuples)
	// 		console.log('GROUP -------------')
	// 		console.log(groupsTuples)
	// 		console.log('STUDENT -----------')
	// 		console.log(studentsTuples)
	// 	}
	// 	logging()
	// }, [enterpriseTuples, groupsTuples, studentsTuples])
	// after we resolve the firestore query operations, we have to join the resultant tuples

	useEffect(() => {
		function enterpriseAndGroupJOIN() {
			useEntitiesJoin(
				enterpriseTuples,
				groupsTuples,
				"empresa_id",
				"empresa_id",
				(result) => {
					setJoinOne(result)
				}
			)
		}
		enterpriseAndGroupJOIN()
	}, [enterpriseTuples, groupsTuples])

	useEffect(() => {
		function groupAndStudentJOIN() {
			useEntitiesJoin(
				studentsTuples,
				joinOne,
				"grupo_id",
				"grupo_id",
				(result) => {
					setJoinTwo(result)
				}
			)
		}
		groupAndStudentJOIN()
	}, [joinOne, studentsTuples])

	useEffect(() => {
		console.log('JOIN para [empresa-grupo]')
		console.log(joinOne)
		console.log('JOIN para [grupo-estudiante]')
		console.log(joinTwo)
	}, [joinOne, joinTwo])


	if (loading) return <p>Cargando datos en tiempo real...</p>
	if (error !== null) return <p>Error {error.message}</p>

	return (
		<div className='Survey__grid'>
			<div className='Survey__col'>
				{
					enterpriseTuples.length > 0 && enterpriseTuples.map((tupleData, i) => {
						let keyFmt = `enterprise__${Math.random().toString()}__${i}`
						return (
							<ColumnComponent
								index={i}
								trustedData={{ ...tupleData }}
								key={keyFmt}
							/>
						)
					})
				}
				<ScrollEffect />
			</div>
			<div className='Survey__col'>
				<h2>empresa - grupo</h2>
				{
					joinOne.length > 0 && joinOne.map((tupleData, i) => {
						let keyFmt = `join1__${Math.random().toString()}__${i}`
						return (
							<GroupCard objeto={{ ...tupleData }} key={keyFmt} />
						)
					})
				}
			</div>
			<div className='Survey__col'>
				<h2>alumnos en ese grupo</h2>
				{
					joinTwo.length > 0 && joinTwo.map((tupleData, i) => {
						let keyFmt = `join2__${Math.random().toString()}__${i}`
						return (
							<StudentEmployeeCard objeto={{ ...tupleData }} key={keyFmt} />
						)
					})
				}
			</div>
		</div>
	)
}