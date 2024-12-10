const privateUseFetch = async (params, loadingCB, payloadCB, controller) => {
    const { url, ...fields } = params
    const httpOptions = fields?.httpOptions
    loadingCB(true)

    if (httpOptions != null) {
        try {
            const res = await fetch(url, { ...httpOptions, signal: controller.signal })
            if (!res.ok) {
                payloadCB({
                    effectStatus: 'rejected',
                    message: 'Rechazo desconocido por la red. Verifique la conexión.',
                })
                return
            }

            const data = await res.json()
            payloadCB({
                effectStatus: 'fulfilled',
                payload: data,
            })
        } catch (err) {
            if (err.name !== 'AbortError') {
                payloadCB({
                    effectStatus: 'rejected',
                    message: err.message,
                })
            }
        } finally {
            loadingCB(false)
            console.log('Operaciones internas de React Effect han terminado')
        }
    } else {
        payloadCB({
            effectStatus: 'rejected',
            message: 'no has pasado los parametros correctos',
        })
    }
}

export { privateUseFetch }