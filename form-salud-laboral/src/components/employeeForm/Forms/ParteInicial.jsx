import { useEffect } from "react"
import EmployeeIdentForm from "./DatosDeIdentificacion"
import { useFormStore } from '../../../lib/(zustand)/formStore'
import "./styles/DynamicForms.css"


export default function ParteInicial({ step, setStep }) {
  const inputValue = useFormStore((state) => state.inputValue)
  const setInputValue = useFormStore((state) => state.setInputValue)

  const handleUpdate = (evt) => {
    evt.preventDefault()
    const formData = new FormData(evt.target)
    const inputValue2 = Object.fromEntries(formData)
    setInputValue({ ...inputValue2 })
  }

  
  return (
    <div className="form-container">
      <h3>Datos Descriptivos de la Persona</h3>
      <form
        id="form1"
        className="formStyle"
        onSubmit={(e) => {
          handleUpdate(e)
          setStep(step + 1)
        }}
      >
        <div className="static-fields-grid" id="opcion-multiple-parteInicial">
          <EmployeeIdentForm />
        </div>
        <div className="button-container">
          <button
            type="submit"
            className="button"
          >
            {"siguiente"}
          </button>
        </div>
        </form>
    </div>
  )
}