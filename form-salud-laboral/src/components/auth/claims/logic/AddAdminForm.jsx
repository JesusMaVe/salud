import { useEffect, useState } from 'react'
import { authTokenResolver, claimsTokenResolver } from '../../../../lib/utils/auth'
import { authy } from '../../../../lib/utils/cloudFunctions'
import ClaimsFormUI from '../ui/ClaimsFormUI'

export default function AddAdminForm() {
	const [uid, setUID] = useState("")
	const [token, setToken] = useState("")

	useEffect(() => {
		const unsub = claimsTokenResolver(
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
			await authy(token)
		} catch (err) {
			console.log('error in 3rd layer of auth services', err)
		}
	}

	return (
		<>
			<ClaimsFormUI 
				token={token}
				onClickCallback={() => newClaimsController()}
			/>
		</>
	)
}
