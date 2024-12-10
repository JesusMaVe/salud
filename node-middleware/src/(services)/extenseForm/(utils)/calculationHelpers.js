const ENTITIES_ENUM = {
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

const determineCategoryScore = (totalScore, maxScore) => {
    const thresholds = {
        excellent: maxScore * 0.95,
        good: maxScore * 0.75,
        regular: maxScore * 0.5
    }

    if (totalScore >= thresholds.excellent) return 'excelente'
    if (totalScore >= thresholds.good) return 'bueno'
    if (totalScore >= thresholds.regular) return 'regular'
    return 'deficiente'
}

const calculateScore = (originalSectionIdentifier, trustedDataFields) => {
    let targetScores = []

    const attrbs = ENTITIES_ENUM[originalSectionIdentifier]

    for (let [k, v] of Object.entries(attrbs)) {
        if (k === 'income') {
            continue
        }
        if (trustedDataFields[k] != null) {
            targetScores.push(trustedDataFields[k])
        }
    }
    let total = 0

    if (targetScores.length > 0) {
        targetScores.forEach((el, i) => {
            if (typeof el === 'number') {
                total += el
            }
            if (Array.isArray(el)) {
                el.map((el, i, arr) => {
                    if (arr.length > 6) {
                        total -= 5
                    }
                })
            }
        })
    }

    return total
}


module.exports = { determineCategoryScore, calculateScore }