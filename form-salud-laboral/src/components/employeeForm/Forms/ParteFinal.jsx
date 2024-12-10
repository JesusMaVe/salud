import { useState, useEffect } from "react"
import CustomSelect from "../CustomSelect/CustomSelect"

// zustand imports
import { useFormStore, useRequestBodyStore } from '../../../lib/(zustand)/formStore'
// import { useScoreFormatStore } from '../../../lib/(zustand)/formStore'

// logic files imports
import { ATRIBUTOS_DE_ENTIDAD } from "../../../lib/(ENTITIES_ENUMS)/extenseForm/enum"
import { calculateScores, transformateArray } from "../../../lib/dataHandling/serverRequest"

// UI and CSS imports
import Accordion from "../ui/commonUI/accordion/Accordion"
import "./styles/DynamicForms.css"


export default function ParteMedia({
  surveyTemplate = [],
  sectionTitle,
  sectionId,
  previousSectionKey,
  sectionKey,
  step,
  setStep,
  // scoreFormat
}) {
  const inputValue = useFormStore((state) => state.inputValue);
  const setInputValue = useFormStore((state) => state.setInputValue);
  const requestBody = useRequestBodyStore((state) => state.requestBody);
  const setRequestBody = useRequestBodyStore((state) => state.setRequestBody);

  const [originalArrayTemplate, setOriginalArrayTemplate] = useState([])

  useEffect(() => {
    function copyArray() {
      setOriginalArrayTemplate(prev => ([
        ...surveyTemplate
      ]))
    }
    copyArray()
  }, [inputValue])

  const [hasFormSubmitted, setHasFormSubmitted] = useState(false)

  const handleUpdate = async (evt) => {
    evt.preventDefault()
    const formData = new FormData(evt.target)
    const newInputValues = Object.fromEntries(formData)
    setInputValue({ ...inputValue, ...newInputValues })

    const formatoDelENUM = ATRIBUTOS_DE_ENTIDAD[sectionKey]

    const nuevo = transformateArray(originalArrayTemplate, newInputValues)

    if (nuevo.length > 0) {
      const result = calculateScores(nuevo, formatoDelENUM, sectionKey)

      if (result !== null) {
        setRequestBody(({ ...requestBody, ...result }))

        const r = await fetch('http://localhost:8085/evaluar-puntajes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody)
        })
        const j = await r.json()
        if (j != null) {
          console.log(j)
        }
        setHasFormSubmitted(true)
      }

    } else {
      console.log('error transformando el formulario')
    }

  }
  useEffect(() => {
    function loggOne() {
      console.log(' ------------- requestBody -------------')
      console.log(requestBody)
    }
    loggOne()
  }, [requestBody])

  useEffect(() => {
    function clean() {
      if (hasFormSubmitted) {
        setHasFormSubmitted(false)
      }
    }
    clean()
  }, [hasFormSubmitted])

  return (
    <div className="form-container">
      <h3>{sectionTitle}</h3>
      <form
        id="form2"
        className="formStyle"
        onSubmit={(e) => {
          handleUpdate(e);
        }}
      >
        <div className="selects-grid" id={`opcion-multiple-parte${step}`}>
          {surveyTemplate
            .reduce((rows, pregunta, index) => {
              if (index % 6 === 0) rows.push([]);
              rows[rows.length - 1].push(pregunta);
              return rows;
            }, [])
            .map((row, rowIndex) => (
              <Accordion
                key={rowIndex}
                title={`${sectionTitle}, seccion ${rowIndex + 1}`}
              >
                <div className="grid-two-columns">
                  {row.map((pregunta, i) => (
                    <CustomSelect
                      key={i}
                      pregunta={pregunta.pregunta}
                      preguntaInputName={pregunta.preguntaInputName}
                      opcionesArray={pregunta.opciones}
                      tipo={pregunta.tipo}
                    />
                  ))}
                </div>
              </Accordion>
            ))}
        </div>
        <div className="button-container">
          <button
            type="button"
            className="button"
            onClick={(e) => {
              setStep(step - 1);
            }}
          >
            {"atras"}
          </button>
        </div>

        <div className="button-container">
          <button type="submit" className="button">
            {"Guardar entrevista en la base de datos"}
          </button>
        </div>

      </form>
    </div>
  )
}
