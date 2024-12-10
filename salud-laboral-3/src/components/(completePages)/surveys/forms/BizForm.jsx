export default function BizForm() {
	async function handleBizFormSubmit(evt) {
		evt.preventDefault()
		const temp = {
			id: evt.target.id.value,
			nombre: evt.target.nombre.value,
			direccion: evt.target.direccion.value,
		}
		console.log(temp)
		const r = await fetch("http://127.0.0.1:8080/empresa", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(temp),
		})
		// const j = r.json()
		console.log({...r})
	}
	return (
		<div>
			<form id="bz-form" key={'bz'} onSubmit={e => handleBizFormSubmit(e)}>
			<label style={{display:'block'}}>
				{'EMPRESA'}
			</label>


			<input 
				type='number'
				name='id'
				placeholder='id empresa'
			/>
			<hr/>
			<input 
				type='text'
				name='nombre'
				placeholder='nombre empresa'
			/>
			<hr/>
			<input 
				type='text'
				name='direccion'
				placeholder='direccion'
			/>
			<hr/>


			<button type='submit'>
				{'Enviar a Java Spring'}
			</button>
			</form>
		</div>
	)

}
