import { useEffect, useState } from 'react'
import { authTokenResolver } from '../../../../lib/utils/auth'
import { adminsCallback } from '../../../../lib/utils/cloudFunctions'
import ClaimsFormUI from '../ui/ClaimsFormUI'
import AddStudentsUI from '../ui/AddStudentsUI'

export default function AddAdminForm() {
	const [uid, setUID] = useState("")
	const [token, setToken] = useState("")

	useEffect(() => {
		const unsub = authTokenResolver(
			(user) => {
				setUID(user.uid)
			},
			(tokenString) => {
				if (tokenString != null) {
					setToken(tokenString)
				}
			},
			(err) => {
				console.log(err)
			}
		)
		return unsub
	}, [])

	const newClaimsController = async () => {
		try {
			await adminsCallback(token)
		} catch (err) {
			console.log('error in 3rd layer of auth services', err)
		}
	}

	return (
		<>
			<ClaimsFormUI 
				uid={uid}
				onClickCallback={() => newClaimsController()}
			/>
			<AddStudentsUI />
		</>
	)
}
