import { useState, useEffect } from "react"
import CustomSelect from "../CustomSelect/CustomSelect"
import { useFormStore, useRequestBodyStore } from '../../../lib/(zustand)/formStore'
import { calculateScores, transformateArray } from "../../../lib/dataHandling/serverRequest"
import { ATRIBUTOS_DE_ENTIDAD } from "../../../lib/(ENTITIES_ENUMS)/extenseForm/enum"
import Accordion from "../ui/commonUI/accordion/Accordion"
import "./styles/DynamicForms.css"


export default function ParteMedia({
  surveyTemplate = [],
  sectionTitle,
  sectionId,
  sectionKey,
  step,
  setStep,
}) {
  const inputValue = useFormStore((state) => state.inputValue);
  const setInputValue = useFormStore((state) => state.setInputValue);
  const requestBody = useRequestBodyStore((state) => state.requestBody);
  const setRequestBody = useRequestBodyStore((state) => state.setRequestBody);

  const [originalArrayTemplate, setOriginalArrayTemplate] = useState([])
  const [scoreProperFormat, setScoreProperFormat] = useState(null)

  useEffect(() => {
    function copyArray() {
      setOriginalArrayTemplate(prev => ([
        ...surveyTemplate
      ]))
    }
    copyArray()
  }, [inputValue])

  const handleUpdate = (evt) => {
    evt.preventDefault()
    const formData = new FormData(evt.target);
    const newInputValues = Object.fromEntries(formData)
    setInputValue({ ...inputValue, ...newInputValues })

    const formatoDelENUM = ATRIBUTOS_DE_ENTIDAD[sectionKey]

    const nuevo = transformateArray(originalArrayTemplate, newInputValues)

    if(nuevo.length > 0) {
      const result = calculateScores(nuevo, formatoDelENUM, sectionKey)

      console.log(`Calculo de puntajes de ${sectionKey.toUpperCase()}`)
      console.log(result)
      

      result !== null && setScoreProperFormat(result)

      scoreProperFormat != null && setRequestBody({ ...requestBody, ...scoreProperFormat })
    } else {
      console.log('error transformando el formulario')
    }
  }

  useEffect(() => {
    function logOfRequestBody() {
      console.log("hasta ahora llevamos esto ->")
      console.log(requestBody)
    }
    logOfRequestBody()
  }, [requestBody])

  return (
    <div className="Enterprise__form-container">
      <h3>{sectionTitle}</h3>
      <form
        id="form2"
        className="Enterprise__formStyle"
        onSubmit={(e) => {
          handleUpdate(e);
          setStep(step + 1);
        }}
      >
        <div className="Enterprise__selects-grid" id={`opcion-multiple-parte${step}`}>
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
                <div className="Enterprise__grid-two-columns">
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
        <div className="Enterprise__button-container">
          <button
            type="button"
            className="Enterprise__button"
            onClick={(e) => {
              setStep(step - 1);
            }}
          >
            {"atras"}
          </button>
          <button type="submit" className="Enterprise__button">
            {"siguiente"}
          </button>
        </div>
      </form>
    </div>
  );
}
