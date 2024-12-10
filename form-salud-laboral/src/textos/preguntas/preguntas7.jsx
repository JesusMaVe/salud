import { NOMBRE_SECCION } from "../../lib/(ENTITIES_ENUMS)/extenseForm/enum";

const SistemaCardiovascularPreguntasArray = [
  {
    pregunta: "Peso (kg):",
    preguntaInputName: "cardio1",
    placeholder: "peso",
    opciones: [],
    tipoPregunta: "positivo",
    sectionKey: "section7",
    sectionId: "salud_cardiovascular",
    enum_matcher_Attr: "condicionCardiaca",
  },
  {
    pregunta: "Talla (cm):",
    preguntaInputName: "cardio2",
    placeholder: "talla",
    opciones: [],
    tipoPregunta: "positivo",
    sectionKey: "section7",
    sectionId: "salud_cardiovascular",
    enum_matcher_Attr: "condicionCardiaca",
  },
  {
    pregunta: "TA 1er. toma (mmHg):",
    preguntaInputName: "cardio3",
    placeholder: "TA-1",
    opciones: [],
    tipoPregunta: "positivo",
    sectionKey: "section7",
    sectionId: "salud_cardiovascular",
    enum_matcher_Attr: "condicionCardiaca",
  },
  {
    pregunta: "TA 2da. toma (mmHg):",
    preguntaInputName: "cardio4",
    placeholder: "TA-2",
    opciones: [],
    tipoPregunta: "positivo",
    sectionKey: "section7",
    sectionId: "salud_cardiovascular",
    enum_matcher_Attr: "condicionCardiaca",
  },
  {
    pregunta: "IMC:",
    preguntaInputName: "cardio5",
    placeholder: "imc",
    opciones: [],
    tipoPregunta: "positivo",
    sectionKey: "section7",
    sectionId: "salud_cardiovascular",
    enum_matcher_Attr: "condicionCardiaca",
  },
  {
    pregunta: "TA promedio (mmHg):",
    preguntaInputName: "cardio6",
    placeholder: "TA-prom",
    opciones: [],
    tipoPregunta: "positivo",
    sectionKey: "section7",
    sectionId: "salud_cardiovascular",
    enum_matcher_Attr: "condicionCardiaca",
  },
  {
    pregunta: "Clasificación:",
    preguntaInputName: "cardio7",
    opciones: [
      { valor: "normal" },
      { valor: "Prehipertensión" },
      { valor: "Hipertensión etapa 1" },
      { valor: "Hipertensión etapa 2" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section7",
    sectionId: "salud_cardiovascular",
    enum_matcher_Attr: "condicionCardiaca",
  },
  {
    pregunta: (
      <>
        CUESTIONARIO DE FACTORES DE RIESGO <br />
        <br />
        Bajo riesgo DM igual o mayor a 10 puntos Alto riesgo DM=≥ 10 puntos{" "}
        <br />
        <br />
        1. ¿Alguno de sus hermanos padece o padeció diabetes mellitus? SI=1
      </>
    ),
    preguntaInputName: "cardio8",
    opciones: [{ valor: "Si " }, { valor: "No " }],
    tipoPregunta: "positivo",
    sectionKey: "section7",
    sectionId: "salud_cardiovascular",
    enum_matcher_Attr: "condicionCardiaca",
  },
  {
    pregunta:
      "2. ¿Alguno de sus padres padece o padeció diabetes mellitus? Si=1 ",
    preguntaInputName: "cardio9",
    opciones: [{ valor: "Si " }, { valor: "No " }],
    tipoPregunta: "positivo",
    sectionKey: "section7",
    sectionId: "salud_cardiovascular",
    enum_matcher_Attr: "condicionCardiaca",
  },
  {
    pregunta: "3. Mujer. ¿Ha tenido algún bebe con más de 4kg al nacer? SI=1 ",
    preguntaInputName: "cardio10",
    opciones: [{ valor: "Si " }, { valor: "No " }],
    tipoPregunta: "positivo",
    sectionKey: "section7",
    sectionId: "salud_cardiovascular",
    enum_matcher_Attr: "condicionCardiaca",
  },
  {
    pregunta:
      "4. ¿Presenta al menos 2 de los siguientes datos? Mucha sed, orina mucho o tiene mucha hambre. ",
    preguntaInputName: "cardio11",
    opciones: [{ valor: "Si " }, { valor: "No " }],
    tipoPregunta: "positivo",
    sectionKey: "section7",
    sectionId: "salud_cardiovascular",
    enum_matcher_Attr: "condicionCardiaca",
  },
  {
    pregunta: "5. Su IMC se ubica en: normal=0, sobrepeso=5, obeso=10.",
    preguntaInputName: "cardio12",
    opciones: [{ valor: "Si " }, { valor: "No " }],
    tipoPregunta: "positivo",
    sectionKey: "section7",
    sectionId: "salud_cardiovascular",
    enum_matcher_Attr: "condicionCardiaca",
  },
  {
    pregunta: "6. Cintura mujer>=80cm y hombre >=90cm. SI=10",
    preguntaInputName: "cardio13",
    opciones: [{ valor: "Si " }, { valor: "No " }],
    tipoPregunta: "positivo",
    sectionKey: "section7",
    sectionId: "salud_cardiovascular",
    enum_matcher_Attr: "condicionCardiaca",
  },
  {
    pregunta:
      "7. Normalmente hace poco o nada de ejercicio (solo menor de 65 años) SI=5",
    preguntaInputName: "cardio14",
    opciones: [{ valor: "Si " }, { valor: "No " }],
    tipoPregunta: "positivo",
    sectionKey: "section7",
    sectionId: "salud_cardiovascular",
    enum_matcher_Attr: "condicionCardiaca",
  },
  {
    pregunta: "8. Tiene entre 45-64 años. SI=5",
    preguntaInputName: "cardio15",
    opciones: [{ valor: "Si " }, { valor: "No " }],
    tipoPregunta: "positivo",
    sectionKey: "section7",
    sectionId: "salud_cardiovascular",
    enum_matcher_Attr: "condicionCardiaca",
  },
  {
    pregunta: "9. Tiene 65 o más años de edad. SI=9",
    preguntaInputName: "cardio16",
    opciones: [{ valor: "Si " }, { valor: "No " }],
    tipoPregunta: "positivo",
    sectionKey: "section7",
    sectionId: "salud_cardiovascular",
    enum_matcher_Attr: "condicionCardiaca",
  },
];

export default SistemaCardiovascularPreguntasArray;
