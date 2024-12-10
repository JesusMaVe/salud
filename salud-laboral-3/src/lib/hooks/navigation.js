import { useSearchParams, useNavigate } from 'react-router-dom'

const useUpdateURLSearchParams = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    const updateURLSearchParams = (key, value) => {
        const params = new URLSearchParams(searchParams)
        params.set(key, value)
        navigate({ search: params.toString() }, { replace: true })
    }
    return updateURLSearchParams
}


export { useUpdateURLSearchParams }
