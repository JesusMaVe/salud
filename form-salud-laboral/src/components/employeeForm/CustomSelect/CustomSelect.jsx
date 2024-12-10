import "./CustomSelect.css"

export default function CustomSelect({ pregunta, preguntaInputName, opcionesArray = [] }) {
  return (
    <div className="g1Item">
      <h3>{pregunta}</h3>
      {opcionesArray.length === 0 ? (
        pregunta.toLowerCase().includes("fecha") ? (
          <input
            type="date"
            name={preguntaInputName}
          />
        ) : pregunta.toLowerCase().includes("edad") ? (
          <input
            type="number"
            name={preguntaInputName}
            min="0"
            max="100"
            placeholder="Ingresa tu edad"
          />
        ) : (
          pregunta.toLowerCase().includes("cm") || pregunta.toLowerCase().includes("kg") ||
          pregunta.toLowerCase().includes("IMC") || pregunta.toLowerCase().includes("mmHg")
        ) ? (
          <input
            type="number"
            name={preguntaInputName}
            min="0"
            max="100"
            placeholder="Ingresa tu edad"
          />
        ) : (
          <input
            type="text"
            name={preguntaInputName}
            placeholder={`Ingresa ${pregunta.placeholder}`}
          />
        )
      ) : (
        <select name={preguntaInputName}>
          <option value="">Seleccione</option>
          {opcionesArray.map((opcion, i) => (
            <option value={opcion.valor} key={i}>
              {opcion.valor}
            </option>
          ))}
        </select>
      )}
    </div>
  )
}