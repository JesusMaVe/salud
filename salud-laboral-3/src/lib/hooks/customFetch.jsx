import { useCallback, useRef, useEffect } from 'react'
import { privateUseFetch } from './utilForHooks/privateFetch'

function useDynamicCallback(callback, dependencies) {
  return useCallback(callback, dependencies)
}

const useFetch = (params, dependenciesArray, setLoading, setPayload, setError) => {
  const callback = useDynamicCallback(() => {
    const controller = new AbortController()
    privateUseFetch(
      params,
      setLoading,
      (effect) => {
        if (effect.effectStatus === 'fulfilled') {
          setPayload(effect.payload)
        } else {
          setError(effect.message)
        }
      },
      controller
    )
    return () => controller.abort()
  }, dependenciesArray)

  useEffect(() => {
    const cancelFetch = callback()
    return cancelFetch
  }, [callback])
}

export { useFetch }