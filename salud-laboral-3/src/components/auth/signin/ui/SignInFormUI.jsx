import '../styles/SignIn.css'

export default function SignInFormUI({ handleUserEmail, handleUserPass, onClickCallback }) {
	return (
		<div className='SignIn__Card'>
			<div className='SignIn__inputGroup'>
				<span className='SignIn__formTitle'>
					Accede a tu cuenta
				</span>

				<span className='SignIn__inputLine'>
					<label className='SignIn__label'>{"  "}Email</label>
					<input type='email' placeholder='doe@example.com' className='SignIn__input' onChange={handleUserEmail} />
				</span>

				<span className='SignIn__inputLine'>
					<label className='SignIn__label'>{"  "}Password</label>
					<input type='password' placeholder='S3CURE@PASSWORD' className='SignIn__input' onChange={handleUserPass} />
				</span>

				<span className='SignIn__inputLine'>
					<button 
						type='button'
						className='SignIn__formBtn'
						onClick={onClickCallback}
					>
						iniciar sesión
					</button>
				</span>

			</div>
		</div>
	)
}