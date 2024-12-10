import { NOMBRE_SECCION } from "../../lib/(ENTITIES_ENUMS)/extenseForm/enum";

const ActividadReposoPreguntasArray = [
  {
    pregunta: "1. Realiza esfuerzo físico muy pesado ",
    preguntaInputName: "trabajoexigencia1",
    opciones: [{ valor: "Si " }, { valor: "No " }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta: (
      <>
        Su puesto de trabajo lo obliga a realizar movimientos que requieren
        fuerza con alguna de las siguientes partes del cuerpo
        <br /> <br />
        2. Hombros, brazos o manos
      </>
    ),
    preguntaInputName: "trabajoexigencia2",
    opciones: [{ valor: "Si " }, { valor: "No " }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta: "3. Espalada o cintura ",
    preguntaInputName: "trabajoexigencia3",
    opciones: [{ valor: "Si " }, { valor: "No " }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta: "4. Piernas ",
    preguntaInputName: "trabajoexigencia4",
    opciones: [{ valor: "Si " }, { valor: "No " }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta: (
      <>
        Su puesto de trabajo lo obliga a:
        <br /> <br />
        5. Levantar objetos desde el nivel del piso
      </>
    ),
    preguntaInputName: "trabajoexigencia5",
    opciones: [{ valor: "Si " }, { valor: "No " }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta:
      "6. Levantar objetos desde alturas que están entre rodillas y pecho",
    preguntaInputName: "trabajoexigencia6",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta: "7. Levantar objetos a alturas por arriba de los hombros",
    preguntaInputName: "trabajoexigencia7",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta: "8. Cargar, empujar o jalar objetos hasta 5 kilos",
    preguntaInputName: "trabajoexigencia8",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta: "9. Cargar, empujar o jalar objetos de 6 a 15 kilos",
    preguntaInputName: "trabajoexigencia9",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta: "10. Cargar, empujar o jalar objetos de 16 a 30 kilos",
    preguntaInputName: "trabajoexigencia10",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta: "11. Cargar, empujar o jalar objetos de más de 30 kilos",
    preguntaInputName: "trabajoexigencia11",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta: "12. Usar herramientas manuales como martillo, cuchillo o pinza",
    preguntaInputName: "trabajoexigencia12",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta: "13. Usar herramienta como pico, pala, machete o marro",
    preguntaInputName: "trabajoexigencia13",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta: "14. Adoptar posiciones incomodas o forzadas",
    preguntaInputName: "trabajoexigencia14",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta:
      "15. ¿Realiza movimientos con los brazos por encima o detrás de los hombros?",
    preguntaInputName: "trabajoexigencia15",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta: "16. ¿Para realizar su trabajo usted requiere estar encorvado?",
    preguntaInputName: "trabajoexigencia16",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta:
      "17. ¿El trabajo incluye movimientos repetitivos de las manos o tiene que abrir excesivamente los dedos o torcerlos?",
    preguntaInputName: "trabajoexigencia17",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta: "18. Realiza movimientos de rotación de la cintura",
    preguntaInputName: "trabajoexigencia18",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta: "19. Al realizar su trabajo los hombros están tensos",
    preguntaInputName: "trabajoexigencia19",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta:
      "20. Tiene que torcer o mantener tensa la o las muñecas para trabajar",
    preguntaInputName: "trabajoexigencia20",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta:
      "21. Realiza movimientos repetidos como para mover una manivela para atornillar o enroscar",
    preguntaInputName: "trabajoexigencia21",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta:
      "22. El peso del cuerpo recae solo en uno de los pies o en una pierna (sin posibilidad de descansar el pie en un escalón o periquera)",
    preguntaInputName: "trabajoexigencia22",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta:
      "23. Utiliza pedales u otros mecanismos con los pies o las rodillas.",
    preguntaInputName: "trabajoexigencia23",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta: "24. Utiliza algún asiento sin respaldo o es incómodo",
    preguntaInputName: "trabajoexigencia24",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta:
      "25. Los dispositivos o pedales son inestables o están mal colocados",
    preguntaInputName: "trabajoexigencia25",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta: "26. Permanece de pie para trabajar",
    preguntaInputName: "trabajoexigencia26",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta: "27.Para trabajar permanece sentado",
    preguntaInputName: "trabajoexigencia27",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta: "28. La superficie donde se sienta es incómoda",
    preguntaInputName: "trabajoexigencia28",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta:
      "29. Al estar sentado, no es posible apoyar los pies en algún lado",
    preguntaInputName: "trabajoexigencia29",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
  {
    pregunta:
      "30. Para realizar su trabajo debe permanecer en cuclillas o arrodillado",
    preguntaInputName: "trabajoexigencia30",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
    tipoPregunta: "positivo",
    sectionKey: "section9",
    sectionId: "estilo_de_vida",
    enum_matcher_Attr: "nivelDeActividad",
  },
];

export default ActividadReposoPreguntasArray;
