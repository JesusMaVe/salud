import { firestore } from "../../../lib/sdk/firebase"
import { doc, setDoc } from "firebase/firestore"
import EnterpriseCreationForm from "./EnterpriseCreationForm"
import "./styles/DynamicForms.css"


export default function ParteInicial({ step, setStep }) {
  const handleUpdate = async (evt) => {
    evt.preventDefault()
    const formData = new FormData(evt.target)
    const formatedData = Object.fromEntries(formData)

    const fecha = new Date().toISOString()
    await setDoc(doc(firestore, `empresasParticipantes/${formatedData.nombre}-${fecha}`), {
      ...formatedData
    })
  }

  return (
    <div className="Enterprise__form-container">
      <h2>Bienvenido</h2>
      <span style={{ fontSize: '1.125em' }}>
        Al llenar este formulario, su organización confirma la participación en el programa de "Salud laboral de la UAA"
      </span>
      <form
        id="form1"
        className="Enterprise__formStyle"
        onSubmit={async (e) => {
          await handleUpdate(e)
        }}
      >
        <div className="Enterprise__static-fields-grid" id="opcion-multiple-parteInicial">
          <EnterpriseCreationForm />
        </div>
        <div className="Enterprise__button-container">
          <button
            type="submit"
            className="Enterprise__button"
          >
            {"enviar"}
          </button>
        </div>
      </form>
    </div>
  )
}