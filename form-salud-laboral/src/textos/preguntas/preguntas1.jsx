const PreguntasArray = [
  {
    pregunta: "Sexo:",
    preguntaInputName: "sexo",
    opciones: [{ valor: "Masculino" }, { valor: "Femenino" }],
    tipoPregunta: "positivo",
    sectionKey: "section1",
    sectionId: "condiciones_laborales",
    enum_matcher_Attr: "jobSatisfaction",
  },
  {
    pregunta: "Estado Civil:",
    preguntaInputName: "edocivil",
    opciones: [
      { valor: "Soltero" },
      { valor: "Casado" },
      { valor: "Divorciado" },
      { valor: "Viudo" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section1",
    sectionId: "condiciones_laborales",
    enum_matcher_Attr: "jobSatisfaction",
  },
  {
    pregunta: "Escolaridad:",
    preguntaInputName: "escolaridad",
    opciones: [
      { valor: "Primaria" },
      { valor: "Secundaria" },
      { valor: "Preparatoria" },
      { valor: "Universidad" },
      { valor: "Maestría" },
      { valor: "Doctorado" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section1",
    sectionId: "condiciones_laborales",
    enum_matcher_Attr: "jobSatisfaction",
  },
  {
    pregunta: "Folio:",
    preguntaInputName: "folio",
    placeholder: "folio",
    opciones: [],
    tipoPregunta: "positivo",
    sectionKey: "section1",
    sectionId: "condiciones_laborales",
    enum_matcher_Attr: "jobSatisfaction",
  },
];

export default PreguntasArray;
