import { NOMBRE_SECCION } from "../../lib/(ENTITIES_ENUMS)/extenseForm/enum";

const PromocionHumanoPreguntasArray = [
  {
    pregunta: (
      <>
        ESCALA DE ESTRÉS PERCIBIDO
        <br />
        <br />
        1.- En el último mes ¿Con qué frecuencia ha estado afectado por algo que
        ocurrió inesperadamente?
      </>
    ),
    preguntaInputName: "promocionhumano1",
    opciones: [{ valor: "si" }, { valor: "no" }],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta:
      "2. En el último mes, ¿Con qué frecuencia se ha sentido incapaz de controlar las cosas de su vida?",
    preguntaInputName: "promocionhumano2",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta:
      "3. En el último mes, ¿Con qué frecuencia se ha sentido nervioso o estresado?",
    preguntaInputName: "promocionhumano3",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta:
      "4. En el último mes, ¿Con qué frecuencia ha manejado con éxito los pequeños problemas irritantes de la vida?",
    preguntaInputName: "promocionhumano4",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta:
      "5. En el último mes, ¿Con qué frecuencia ha tenido remordimientos o sentimientos de culpa después de haber bebido?",
    preguntaInputName: "promocionhumano5",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta:
      "6. En el último mes, ¿Con qué frecuencia ha sentido incapacidad para recordar lo que sucedió la noche anterior porque había estado bebiendo?",
    preguntaInputName: "promocionhumano6",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta:
      "7. En el último mes, ¿Con qué frecuencia ha podido controlar las dificultades de su vida?",
    preguntaInputName: "promocionhumano7",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta:
      "8. En el último mes, ¿Con qué frecuencia ha podido controlar el tiempo?",
    preguntaInputName: "promocionhumano8",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta:
      "9. En el último mes, ¿Con qué frecuencia ha sentido que las dificultades se acumulan tanto que no puede superarlas?",
    preguntaInputName: "promocionhumano9",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta:
      "10. En el último mes, ¿Con qué frecuencia ha estado preocupado por su salud?",
    preguntaInputName: "promocionhumano10",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta:
      "11. En el último mes, ¿Con qué frecuencia se ha sentido impotente ante los problemas?",
    preguntaInputName: "promocionhumano11",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta:
      "12. En el último mes, ¿Con qué frecuencia ha tenido problemas para dormir?",
    preguntaInputName: "promocionhumano12",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta:
      "13. En el último mes, ¿Con qué frecuencia ha sentido que no puede concentrarse?",
    preguntaInputName: "promocionhumano13",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta:
      "14. En el último mes, ¿Con qué frecuencia ha sentido que no puede disfrutar de las cosas?",
    preguntaInputName: "promocionhumano14",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta: (
      <>
        ESCALA DE ANSIEDAD DE GOLDBERG
        <br />
        <br />
        <br />
        TOTAL ANSIEDAD: mayor a 4
        <br />
        <br />
        1. ¿Se ha sentido muy excitado, nervioso o en tensión?
      </>
    ),
    preguntaInputName: "promocionhumano15",
    opciones: [{ valor: "si" }, { valor: "no" }],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta: "2. ¿Se ha sentido muy irritable?",
    preguntaInputName: "promocionhumano16",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta:
      "3. ¿Ha tenido dificultad para relajarse? (Si hay 2 o más respuestas afirmativas, continuar preguntando)",
    preguntaInputName: "promocionhumano17",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta: "4. ¿Ha dormido mal, ha tenido dificultades para dormir?",
    preguntaInputName: "promocionhumano18",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta: "5. ¿Ha tenido dolores de cabeza o nuca?",
    preguntaInputName: "promocionhumano19",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta:
      "6. ¿Ha tenido alguno de los siguientes síntomas: temblores, hormigueos, mareos, sudores, diarrea? (síntomas vegetativos)",
    preguntaInputName: "promocionhumano20",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta: "7. ¿Ha estado preocupado por su salud?",
    preguntaInputName: "promocionhumano21",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta:
      "8. ¿Ha tenido alguna dificultad para conciliar el sueño, para quedarse dormido?",
    preguntaInputName: "promocionhumano22",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta: (
      <>
        ESCALA DE DEPRESIÓN DE GOLDBERG
        <br />
        <br />
        <br />
        TOTAL DEPRESIÓN: mayor a 3
        <br />
        <br />
        1. ¿Se ha sentido con poca energía?
      </>
    ),
    preguntaInputName: "promocionhumano23",
    opciones: [{ valor: "si" }, { valor: "no" }],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta: "2. ¿Ha perdido usted su interés por las cosas?",
    preguntaInputName: "promocionhumano24",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta: "3. ¿Ha perdido la confianza en sí mismo?",
    preguntaInputName: "promocionhumano25",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta:
      "4. ¿Se ha sentido usted desesperanzado, sin esperanzas? (Si hay respuestas afirmativas a cualquiera de las preguntas anteriores, continuar)",
    preguntaInputName: "promocionhumano26",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta: "5. ¿Ha tenido dificultades para concentrarse?",
    preguntaInputName: "promocionhumano27",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta: "6. ¿Ha perdido peso? (a causa de su falta de apetito)",
    preguntaInputName: "promocionhumano28",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta: "7. ¿Se ha estado despertando demasiado temprano?",
    preguntaInputName: "promocionhumano29",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta: "8. ¿Se ha sentido usted enlentecido?",
    preguntaInputName: "promocionhumano30",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
  {
    pregunta:
      "9. ¿Cree usted que ha tenido tendencia a encontrarse peor por las mañanas?",
    preguntaInputName: "promocionhumano31",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section13",
    sectionId: "promocion_humana",
    enum_matcher_Attr: "saludMental",
  },
];

export default PromocionHumanoPreguntasArray;
