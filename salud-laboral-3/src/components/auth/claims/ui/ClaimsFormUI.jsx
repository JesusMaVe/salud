import '../styles/SignIn.css'

export default function ClaimsFormUI({ uid, onClickCallback }) {
	return (
		<div className='SignIn__Card'>
			<div className='SignIn__inputGroup'>
				<span className='SignIn__formTitle'>
					El usuario actual es {uid}
					<br/>
					¿desea asignarle el rol de admin?
				</span>

				<span className='SignIn__inputLine'>
					<button 
						type='button'
						className='SignIn__formBtn'
						onClick={onClickCallback}
					>
						asignar rol
					</button>
				</span>

			</div>
		</div>
	)
}