const transformateArray = (arregloOriginal, respuestasObj) => {
    const nuevoArreglo = arregloOriginal.map((pregunta) => {
        const respuesta = respuestasObj[pregunta.preguntaInputName]

        return {
            sectionKey: pregunta['sectionKey'],
            sectionId: pregunta['sectionId'],
            enum_matcher_Attr: pregunta['enum_matcher_Attr'],
            respuesta: respuesta || ""
        }
    })
    return nuevoArreglo
}

const calculateScores = (transformedArray, formatFromENUM, sectionKeyParam) => {
    let resultadoFmt = {};
    let resultado = {
        [sectionKeyParam]: {},
    };

    // Agregar el atributo sectionId al resultado
    if (formatFromENUM.sectionId) {
        resultado[sectionKeyParam].sectionId = formatFromENUM.sectionId;
    }

    // Inicializar los puntajes con 0 para las claves relevantes
    for (const [key] of Object.entries(formatFromENUM)) {
        if (key !== "sectionId") { // Excluir sectionId de los puntajes
            resultado[sectionKeyParam][key] = 0;
        }
    }

    // Filtrar respuestas útiles
    const utilTransformedArray = transformedArray.filter((item) => item.respuesta === "Sí");

    // Calcular los puntajes
    utilTransformedArray.forEach((item) => {
        for (const [enum_key] of Object.entries(formatFromENUM)) {
            if (enum_key === item.enum_matcher_Attr) {
                resultado[sectionKeyParam][enum_key] += 1;
            }
        }
    });

    // Validar que todas las claves sean números (excepto sectionId)
    const totalSettedKeysToResultado = Object.keys(resultado[sectionKeyParam]).filter(
        (key) => key !== "sectionId"
    ).length;

    const auxArrayKV = Object.entries(resultado[sectionKeyParam]).filter(
        ([key]) => key !== "sectionId"
    );

    let cont = 0;
    for (let i = 0; i < totalSettedKeysToResultado; i++) {
        if (typeof auxArrayKV[i][1] === "number") {
            cont++;
        }
    }

    // Si todos los valores son válidos, retornar el resultado formateado
    if (cont === totalSettedKeysToResultado) {
        resultadoFmt = { ...resultado };
        return resultadoFmt;
    } else {
        return null;
    }
};



export { calculateScores, transformateArray }