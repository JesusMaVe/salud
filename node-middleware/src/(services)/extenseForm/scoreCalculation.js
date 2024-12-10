const { calculateScore, determineCategoryScore } = require('./(utils)/calculationHelpers.js')


const scoreCalculation = (sectionKey, sectionId, trustedDataFields) => {
    switch (sectionId) {
        case 'condiciones_laborales': {
            const originalSectionIdentifier = typeof sectionKey === 'string' ? sectionKey : undefined
            if (originalSectionIdentifier != null) {
                const obtainedScore = calculateScore(originalSectionIdentifier, trustedDataFields)
                return determineCategoryScore(obtainedScore, 10)
            }
        }
        case 'factores_familiares': {
            const originalSectionIdentifier = typeof sectionKey === 'string' ? sectionKey : undefined
            if (originalSectionIdentifier != null) {
                const obtainedScore = calculateScore(originalSectionIdentifier, trustedDataFields)
                return determineCategoryScore(obtainedScore, 10)
            }
        }
        case 'factores_socioculturales': {
            const originalSectionIdentifier = typeof sectionKey === 'string' ? sectionKey : undefined
            if (originalSectionIdentifier != null) {
                const obtainedScore = calculateScore(originalSectionIdentifier, trustedDataFields)
                return determineCategoryScore(obtainedScore, 10)
            }
        }
        case 'salud_general': {
            const originalSectionIdentifier = typeof sectionKey === 'string' ? sectionKey : undefined
            if (originalSectionIdentifier != null) {
                const obtainedScore = calculateScore(originalSectionIdentifier, trustedDataFields)
                return determineCategoryScore(obtainedScore, 10)
            }
        }
        case 'autocuidado_universal': {
            const originalSectionIdentifier = typeof sectionKey === 'string' ? sectionKey : undefined
            if (originalSectionIdentifier != null) {
                const obtainedScore = calculateScore(originalSectionIdentifier, trustedDataFields)
                return determineCategoryScore(obtainedScore, 10)
            }
        }
        case 'salud_cardiovascular': {
            const originalSectionIdentifier = typeof sectionKey === 'string' ? sectionKey : undefined
            if (originalSectionIdentifier != null) {
                const obtainedScore = calculateScore(originalSectionIdentifier, trustedDataFields)
                return determineCategoryScore(obtainedScore, 10)
            }
        }
        case 'nutricion': {
            const originalSectionIdentifier = typeof sectionKey === 'string' ? sectionKey : undefined
            if (originalSectionIdentifier != null) {
                const obtainedScore = calculateScore(originalSectionIdentifier, trustedDataFields)
                return determineCategoryScore(obtainedScore, 10)
            }
        }
        case 'estilo_de_vida': {
            const originalSectionIdentifier = typeof sectionKey === 'string' ? sectionKey : undefined
            if (originalSectionIdentifier != null) {
                const obtainedScore = calculateScore(originalSectionIdentifier, trustedDataFields)
                return determineCategoryScore(obtainedScore, 10)
            }
        }
        case 'salud_audiovisual': {
            const originalSectionIdentifier = typeof sectionKey === 'string' ? sectionKey : undefined
            if (originalSectionIdentifier != null) {
                const obtainedScore = calculateScore(originalSectionIdentifier, trustedDataFields)
                return determineCategoryScore(obtainedScore, 10)
            }
        }
        case 'prevencion_de_riesgos': {
            const originalSectionIdentifier = typeof sectionKey === 'string' ? sectionKey : undefined
            if (originalSectionIdentifier != null) {
                const obtainedScore = calculateScore(originalSectionIdentifier, trustedDataFields)
                return determineCategoryScore(obtainedScore, 10)
            }
        }
        case 'factores_ambientales': {
            const originalSectionIdentifier = typeof sectionKey === 'string' ? sectionKey : undefined
            if (originalSectionIdentifier != null) {
                const obtainedScore = calculateScore(originalSectionIdentifier, trustedDataFields)
                return determineCategoryScore(obtainedScore, 10)
            }
        }
        case 'promocion_humana': {
            const originalSectionIdentifier = typeof sectionKey === 'string' ? sectionKey : undefined
            if (originalSectionIdentifier != null) {
                const obtainedScore = calculateScore(originalSectionIdentifier, trustedDataFields)
                return determineCategoryScore(obtainedScore, 10)
            }
        }
        default:
            return 'sin calificación'
    }
}


module.exports = { scoreCalculation }
