export default function StudForm() {
	async function handleStudentSubmit(evt) {
		evt.preventDefault()
		const temp1 = {
			id: evt.target.idee.value,
			nombre: evt.target.nombre.value,
			apellidoMaterno: evt.target.apellidoMaterno.value,
			apellidoPaterno: evt.target.apellidoPaterno.value,
			grupo: evt.target.grupo.value,
			contrasenia: evt.target.contrasenia.value,
		}
		console.log(temp1)
		const r = await fetch("http://backend:8080/estudiante", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(temp1),
		})
		console.log(r)
	}
	return (
		<div>
			<form 
				id="std"
				key={'std-f'}
				onSubmit={(e) => handleStudentSubmit(e)}
			>
			<label style={{display:'block'}}>
                {'crear estudiante'}
            </label>

            
			<input 
				type='number'
				name='idee'
				placeholder='id estudiante'
			/>
			<hr/>
			<input 
				type='text'
				name='nombre'
				placeholder='nombre estudiante'
			/>
			<hr/>
			<input 
				type='text'
				name='apellidoPaterno'
				placeholder='paterno'
			/>
			<hr/>
			<input 
				type='text'
				name='apellidoMaterno'
				placeholder='materno'
			/>
			<hr/>
			<input 
				type='text'
				name='grupo'
				placeholder='grupo'
			/>
			<hr/>
			<input 
				type='text'
				name='contrasenia'
				placeholder='contrasenia'
			/>
			<hr/>


			<button type='submit'>
				crear estudiante
			</button>
			</form>
		</div>
	)

}
