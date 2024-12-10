import '../styles/SignIn.css'

export default function ClaimsFormUI({ token, onClickCallback }) {
	return (
		<div className='SignIn__Card'>
			<div className='SignIn__inputGroup'>
				<span className='SignIn__formTitle'>
					Asigna el rol de administrador al usuario actual
				</span>

				<span className='SignIn__inputLine'>
					<button 
						type='button'
						className='SignIn__formBtn'
						onClick={onClickCallback}
					>
						asignar el rol de admin a {token}
					</button>
				</span>

			</div>
		</div>
	)
}