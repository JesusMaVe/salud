import { useState } from 'react'
import { signInService } from '../../../../lib/utils/auth'
import SignInFormUI from '../ui/SignInFormUI'

export default function SignInForm() {
	const [userEmail, setUserEmail] = useState("")
	const [userName, setUserName] = useState("")
	const [pass, setPass] = useState(null)

	const signInController = async () => {
        try {
            await signInService(userEmail, pass)

        } catch(err) {
            console.log('error in 3rd layer of auth services', err)
        }
    }

	return (
		<>
			<SignInFormUI 
				handleUserEmail={(e) => {
					setUserEmail(e.target.value)
				}}
				handleUserPass={(e) => {
					setPass(e.target.value)
				}}
				onClickCallback={() => signInController()}
			/>
		</>
	)
}