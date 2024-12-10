import { NOMBRE_SECCION } from "../../lib/(ENTITIES_ENUMS)/extenseForm/enum";

const PrevencionPeligrosPreguntasArray = [
  {
    pregunta: (
      <>
        Hombres 8-15 Fuerte probabilidad de daño. mayor a 15 probable
        dependencia. mayor 20 dependencia. <br />
        Mujeres 7-13 Fuerte probabilidad de daño. mayor a 13 probable
        dependencia. mayor 20 dependencia.
        <br />
        <br />
        1. ¿Con qué frecuencia consume alguna bebida alcohólica?
      </>
    ),
    preguntaInputName: "peligros1",
    opciones: [
      { valor: "Nunca (0) - Pase a las preguntas 9-10" },
      { valor: "Una o menos veces al mes (1)" },
      { valor: "De 2 a 4 veces al mes (2)" },
      { valor: "De 2 a 3 veces a la semana (3)" },
      { valor: "4 o más veces a la semana (4)" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section11",
    sectionId: "prevencion_de_riesgos",
    enum_matcher_Attr: "estadoDeFumador",
  },
  {
    pregunta:
      "2. ¿Cuántas consumiciones de bebidas alcohólicas suele realizar en un día de consumo normal?",
    preguntaInputName: "peligros2",
    opciones: [
      { valor: "1 o 2 (0)" },
      { valor: "3 o 4 (1)" },
      { valor: "5 o 6 (2)" },
      { valor: "7, 8 o 9 (3)" },
      { valor: "10 o más (4)" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section11",
    sectionId: "prevencion_de_riesgos",
    enum_matcher_Attr: "estadoDeFumador",
  },
  {
    pregunta:
      "3. ¿Con qué frecuencia toma 6 o más bebidas alcohólicas en un solo día?",
    preguntaInputName: "peligros3",
    opciones: [
      { valor: "Nunca (0)" },
      { valor: "Menos de una vez al mes (1)" },
      { valor: "Mensualmente (2)" },
      { valor: "Semanalmente (3)" },
      {
        valor:
          "A diario o casi a diario (4) - Pase a las preguntas 9 y 10 si la suma total de las preguntas 2 y 3 = 0",
      },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section11",
    sectionId: "prevencion_de_riesgos",
    enum_matcher_Attr: "estadoDeFumador",
  },
  {
    pregunta:
      "4. ¿Con qué frecuencia en el curso del último año ha sido incapaz de parar de beber una vez había empezado?",
    preguntaInputName: "peligros4",
    opciones: [
      { valor: "Nunca (0)" },
      { valor: "Menos de una vez al mes (1)" },
      { valor: "Mensualmente (2)" },
      { valor: "Semanalmente (3)" },
      { valor: "A diario o casi a diario (4)" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section11",
    sectionId: "prevencion_de_riesgos",
    enum_matcher_Attr: "estadoDeFumador",
  },
  {
    pregunta:
      "5. ¿Con qué frecuencia en el curso del último año no pudo hacer lo que se esperaba de usted porque había bebido?",
    preguntaInputName: "peligros5",
    opciones: [
      { valor: "Nunca (0)" },
      { valor: "Menos de una vez al mes (1)" },
      { valor: "Mensualmente (2)" },
      { valor: "Semanalmente (3)" },
      { valor: "A diario o casi a diario (4)" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section11",
    sectionId: "prevencion_de_riesgos",
    enum_matcher_Attr: "estadoDeFumador",
  },
  {
    pregunta:
      "6. ¿Con qué frecuencia en el curso del último año ha necesitado beber en ayunas para recuperarse después de haber bebido mucho el día anterior?",
    preguntaInputName: "peligros6",
    opciones: [
      { valor: "Nunca (0)" },
      { valor: "Menos de una vez al mes (1)" },
      { valor: "Mensualmente (2)" },
      { valor: "Semanalmente (3)" },
      { valor: "A diario o casi a diario (4)" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section11",
    sectionId: "prevencion_de_riesgos",
    enum_matcher_Attr: "estadoDeFumador",
  },
  {
    pregunta:
      "7. ¿Con qué frecuencia en el curso del último año ha tenido remordimientos o sentimientos de culpa después de haber bebido?",
    preguntaInputName: "peligros7",
    opciones: [
      { valor: "Nunca (0)" },
      { valor: "Menos de una vez al mes (1)" },
      { valor: "Mensualmente (2)" },
      { valor: "Semanalmente (3)" },
      { valor: "A diario o casi a diario (4)" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section11",
    sectionId: "prevencion_de_riesgos",
    enum_matcher_Attr: "estadoDeFumador",
  },
  {
    pregunta:
      "8. ¿Con qué frecuencia en el curso del último año no ha podido recordar lo que sucedió la noche anterior porque había estado bebiendo?",
    preguntaInputName: "peligros8",
    opciones: [
      { valor: "Nunca (0)" },
      { valor: "Menos de una vez al mes (1)" },
      { valor: "Mensualmente (2)" },
      { valor: "Semanalmente (3)" },
      { valor: "A diario o casi a diario (4)" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section11",
    sectionId: "prevencion_de_riesgos",
    enum_matcher_Attr: "estadoDeFumador",
  },
  {
    pregunta:
      "9. ¿Usted o alguna otra persona ha resultado herido porque usted había bebido?",
    preguntaInputName: "peligros9",
    opciones: [
      { valor: "No (0)" },
      { valor: "Sí, pero no en el curso del último año (1)" },
      { valor: "Sí, el último año (2)" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section11",
    sectionId: "prevencion_de_riesgos",
    enum_matcher_Attr: "estadoDeFumador",
  },
  {
    pregunta:
      "10. ¿Algún familiar, amigo, médico o profesional sanitario ha mostrado preocupación por su consumo de bebidas alcohólicas o le han sugerido que deje de beber?",
    preguntaInputName: "peligros10",
    opciones: [
      { valor: "No (0)" },
      { valor: "Sí, pero no en el curso del último año (1)" },
      { valor: "Sí, el último año (2)" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section11",
    sectionId: "prevencion_de_riesgos",
    enum_matcher_Attr: "estadoDeFumador",
  },
];

export default PrevencionPeligrosPreguntasArray;
