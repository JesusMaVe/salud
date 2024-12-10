const NOMBRE_SECCION = {
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

const ATRIBUTOS_DE_ENTIDAD = {
    section2: {
        sectionId: 'condiciones_laborales',
        satisfaccionLaboral: 8,
        ambienteLaboral: 8,
    },
    section3: {
        sectionId: 'factores_familiares',
        apoyoFamiliar: 3,
        numeroDeDependientes: 3,
    },
    section4: {
        sectionId: 'factores_socioculturales',
        ingreso: 4500,
        nivelEducativo: 5,
        estadoLaboral: 2,
    },
    section5: {
        sectionId: 'salud_general',
        estadoDeSalud: 3,
        // condicionesCronicas: [1, 2, 3],
        // hospitalizacionReciente: 1,
    },
    section6: {
        sectionId: 'autocuidado_universal',
        habitosDeAutocuidado: 2,
        calidadDelSueno: 2,
    },
    section7: {
        sectionId: 'salud_cardiovascular',
        condicionCardiaca: 10,
        presionArterial: 3,
    },
    section8: {
        sectionId: 'nutricion',
        consumoDiarioFrutasVerduras: 5,
        consumoDeAgua: 1,
    },
    section9: {
        sectionId: 'estilo_de_vida',
        nivelDeActividad: 2,
        calidadDelDescanso: 2,
    },
    section10: {
        sectionId: 'salud_audiovisual',
        condicionAuditiva: 2,
        condicionVisual: 2,
    },
    section11: {
        sectionId: 'prevencion_de_riesgos',
        estadoDeFumador: 2,
        consumoDeAlcohol: 2,
    },
    section12: {
        sectionId: 'factores_ambientales',
        calidadDelAmbienteLaboral: 2,
        nivelDeRuido: 2,
    },
    section13: {
        sectionId: 'promocion_humana',
        saludMental: 4,
        nivelDeInteraccionSocial: 4,
    }
}


export { NOMBRE_SECCION, ATRIBUTOS_DE_ENTIDAD }