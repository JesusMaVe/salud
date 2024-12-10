import { useState } from 'react'
import { signUpService } from '../../../../lib/utils/auth'
import SignUpFormUI from '../ui/SignUpFormUI'

export default function SignUpForm() {
	const [userEmail, setUserEmail] = useState("")
	const [userName, setUserName] = useState("")
	const [pass, setPass] = useState(null)

	const signUpController = async () => {
        try {
            await signUpService(userEmail, pass)

        } catch(err) {
            console.log('error in 3rd layer of auth services', err)
        }
    }

	return (
		<>
			<SignUpFormUI 
				handleCustomerName={(e) => {
					setUserName(e.target.value)
				}}
				handleUserEmail={(e) => {
					setUserEmail(e.target.value)
				}}
				handleUserPass={(e) => {
					setPass(e.target.value)
				}}
				onClickCallback={() => signUpController()}
			/>
		</>
	)
}
