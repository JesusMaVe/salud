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
  // OBSOLTEO:  Anteriormente se estaba guardando doblemente el
  //            resultado de conversion del formato 'respuestas' al formato 'puntaje'.
  //            Esto solamente aumentaba el estrés del manejo del estado en el componente.
  // const [scoreProperFormat, setScoreProperFormat] = useState({})

  useEffect(() => {
    function copyArray() {
      setOriginalArrayTemplate(prev => ([
        ...surveyTemplate
      ]))
    }
    copyArray()
  }, [inputValue])

  const [hasFormSubmitted, setHasFormSubmitted] = useState(false)

  const handleUpdate = (evt) => {
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

        setHasFormSubmitted(true)
      }

    } else {
      console.log('error transformando el formulario')
    }
  }
  useEffect(() => {
    function loggOne() {
      console.log(' ------------- inputValue from zustand -------------')
      console.log(inputValue)
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
          setStep(step + 1);
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
          <button type="submit" className="button">
            {"siguiente"}
          </button>
        </div>
      </form>
    </div>
  );
}
