const NOMBRE_SECCION = {
  IDENTIFICACION: 'identificacion',
  CONDICIONES_LABORALES: 'condiciones_laborales',
  FACTORES_FAMILIARES: 'factores_familiares',
  FACTORES_SOCIOCULTURALES: 'factores_socioculturales',
  SALUD_GENERAL: 'salud_general',
  AUTOCUIDADO_UNIVERSAL: 'autocuidado_universal',
  SALUD_CARDIOVASCULAR: 'salud_cardiovascular',
  NUTRICION: 'nutricion',
  ESTILO_DE_VIDA: 'estilo_de_vida',
  SALUD_AUDIOVISUAL: 'salud_audiovisual',
  PREVENCION_DE_RIESGOS: 'prevencion_de_riesgos',
  FACTORES_AMBIENTALES: 'factores_ambientales',
  PROMOCION_HUMANA: 'promocion_humana',
}

// const section1 = {
//   type: 'object',
//   properties: {
//     sectionId: { type: 'string', const: NOMBRE_SECCION.IDENTIFICACION },
//     employeeId: { type: 'string' },
//     name: { type: 'string' },
//     age: { type: 'number', minimum: 18 },
//   },
//   required: ['sectionId', 'employeeId', 'name', 'age'],
//   
// }
const section2 = {
  type: 'object',
  properties: {
    sectionId: { type: 'string', const: NOMBRE_SECCION.CONDICIONES_LABORALES },
    satisfaccionLaboral: { type: 'number', minimum: 0, maximum: 10 },
    ambienteLaboral: { type: 'number', minimum: 0 },
  },
  required: ['sectionId', 'satisfaccionLaboral', 'ambienteLaboral'],
  
}
const section3 = {
  type: 'object',
  properties: {
    sectionId: { type: 'string', const: NOMBRE_SECCION.FACTORES_FAMILIARES },
    apoyoFamiliar: { type: 'number', minimum: 0 },
    numeroDeDependientes: { type: 'number', minimum: 0 },
  },
  required: ['sectionId', 'apoyoFamiliar', 'numeroDeDependientes'],
  
}
const section4 = {
  type: 'object',
  properties: {
    sectionId: { type: 'string', const: NOMBRE_SECCION.FACTORES_SOCIOCULTURALES },
    ingreso: { type: 'number', minimum: 0 },
    nivelEducativo: { type: 'number', minimum: 0 },
    estadoLaboral: { type: 'number', minimum: 0 },
  },
  required: ['sectionId', 'ingreso', 'nivelEducativo', 'estadoLaboral'],
  
}
const section5 = {
  type: 'object',
  properties: {
    sectionId: { type: 'string', const: NOMBRE_SECCION.SALUD_GENERAL },
    estadoDeSalud: { type: 'number', minimum: 0 },
    condicionesCronicas: { type: 'array', items: { type: 'number' } },
    hospitalizacionReciente: { type: 'number', minimum: 0 },
  },
  required: ['sectionId', 'estadoDeSalud'],
  
}
const section6 = {
  type: 'object',
  properties: {
    sectionId: { type: 'string', const: NOMBRE_SECCION.AUTOCUIDADO_UNIVERSAL },
    habitosDeAutocuidado: { type: 'number', minimum: 0 },
    calidadDelSueno: { type: 'number', minimum: 0 },
  },
  required: ['sectionId', 'habitosDeAutocuidado', 'calidadDelSueno'],
  
}
const section7 = {
  type: 'object',
  properties: {
    sectionId: { type: 'string', const: NOMBRE_SECCION.SALUD_CARDIOVASCULAR },
    condicionCardiaca: { type: 'number', minimum: 0 },
    presionArterial: { type: 'number', minimum: 0 },
  },
  required: ['sectionId', 'condicionCardiaca', 'presionArterial'],
  
}
const section8 = {
  type: 'object',
  properties: {
    sectionId: { type: 'string', const: NOMBRE_SECCION.NUTRICION },
    consumoDiarioFrutasVerduras: { type: 'number', minimum: 0 },
    consumoDeAgua: { type: 'number', minimum: 0 },
  },
  required: ['sectionId', 'consumoDiarioFrutasVerduras', 'consumoDeAgua'],
  
}
const section9 = {
  type: 'object',
  properties: {
    sectionId: { type: 'string', const: NOMBRE_SECCION.ESTILO_DE_VIDA },
    nivelDeActividad: { type: 'number', minimum: 0 },
    calidadDelDescanso: { type: 'number', minimum: 0 },
  },
  required: ['sectionId', 'nivelDeActividad', 'calidadDelDescanso'],
  
}
const section10 = {
  type: 'object',
  properties: {
    sectionId: { type: 'string', const: NOMBRE_SECCION.SALUD_AUDIOVISUAL },
    condicionAuditiva: { type: 'number', minimum: 0 },
    condicionVisual: { type: 'number', minimum: 0 },
  },
  required: ['sectionId', 'condicionAuditiva', 'condicionVisual'],
  
}
const section11 = {
  type: 'object',
  properties: {
    sectionId: { type: 'string', const: NOMBRE_SECCION.PREVENCION_DE_RIESGOS },
    estadoDeFumador: { type: 'number', minimum: 0 },
    consumoDeAlcohol: { type: 'number', minimum: 0 },
  },
  required: ['sectionId', 'estadoDeFumador', 'consumoDeAlcohol'],
  
}
const section12 = {
  type: 'object',
  properties: {
    sectionId: { type: 'string', const: NOMBRE_SECCION.FACTORES_AMBIENTALES },
    calidadDelAmbienteLaboral: { type: 'number', minimum: 0 },
    nivelDeRuido: { type: 'number', minimum: 0 },
  },
  required: ['sectionId', 'calidadDelAmbienteLaboral', 'nivelDeRuido'],
  
}
const section13 = {
  type: 'object',
  properties: {
    sectionId: { type: 'string', const: NOMBRE_SECCION.PROMOCION_HUMANA },
    saludMental: { type: 'number', minimum: 0 },
    nivelDeInteraccionSocial: { type: 'number', minimum: 0 },
  },
  required: ['sectionId', 'saludMental', 'nivelDeInteraccionSocial'],
  
}


const EXPECTED_INPUT_SCHEMA = {
  // section1,
  section2,
  section3,
  section4,
  section5,
  section6,
  section7,
  section8,
  section9,
  section10,
  section11,
  section12,
  section13
}


module.exports = { EXPECTED_INPUT_SCHEMA }