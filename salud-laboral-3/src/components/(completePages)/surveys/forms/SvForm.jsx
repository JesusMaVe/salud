export default function SvForm() {
  async function handleSurveySubmit(evt) {
    evt.preventDefault()
    const fecha = new Date(evt.target.fecha.value).toISOString().split('T')[0];
    const temp = {
      folio: evt.target.folio.value,
      fecha: fecha,
    }
    console.log(temp)
    const r = await fetch("http://127.0.0.1:8080/formulario", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(temp),
    })
    // const j = r.json()
    console.log({ ...r })
  }
  return (
    <div>
      <form id="sv-form" key={'sv-f'} onSubmit={e => handleSurveySubmit(e)}>
        <label style={{ display: 'block' }}>
          {'FORMULARIO'}
        </label>


        <input
          type='number'
          name='folio'
          placeholder='folio de formulario'
        />
        <hr />
        <input
          type='date'
          name='fecha'
        />
        <hr />


        <button type='submit'>
          {'Enviar a Java Spring'}
        </button>
      </form>
    </div>
  )

}
