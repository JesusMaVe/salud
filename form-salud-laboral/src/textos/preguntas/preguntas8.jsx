import { NOMBRE_SECCION } from "../../lib/(ENTITIES_ENUMS)/extenseForm/enum";

const MantenimientoAlimentosPreguntasArray = [
  {
    pregunta: "¿En su área de trabajo cuenta con servicio de comedor? ",
    preguntaInputName: "trabajoalimento1",
    opciones: [{ valor: "Si " }, { valor: "No " }],
    tipoPregunta: "positivo",
    sectionKey: "section8",
    sectionId: "nutricion",
    enum_matcher_Attr: "consumoDiarioFrutasVerduras",
  },
  {
    pregunta:
      "¿Considera que el servicio cuenta con las medidas higiénicas necesarias? ",
    preguntaInputName: "trabajoalimento2",
    opciones: [{ valor: "Si " }, { valor: "No " }],
    tipoPregunta: "positivo",
    sectionKey: "section8",
    sectionId: "nutricion",
    enum_matcher_Attr: "consumoDiarioFrutasVerduras",
  },
  {
    pregunta:
      "¿Considera que el servicio le proporciona una alimentación saludable y balanceada? ",
    preguntaInputName: "trabajoalimento3",
    opciones: [{ valor: "Si " }, { valor: "No " }],
    tipoPregunta: "positivo",
    sectionKey: "section8",
    sectionId: "nutricion",
    enum_matcher_Attr: "consumoDiarioFrutasVerduras",
  },
  {
    pregunta:
      "¿En su área de trabajo cuenta con algún espacio para degustar sus alimentos si es que no usa el servicio de comedor? ",
    preguntaInputName: "trabajoalimento4",
    opciones: [{ valor: "Si " }, { valor: "No " }],
    tipoPregunta: "positivo",
    sectionKey: "section8",
    sectionId: "nutricion",
    enum_matcher_Attr: "consumoDiarioFrutasVerduras",
  },
];

export default MantenimientoAlimentosPreguntasArray;
