import { create } from 'zustand'

const useStore = create(
    (set) => ({
        inputValue: 'seleccionar',
        setInputValue: (newValue) => {
            set(state => ({
                inputValue: newValue
            }))
        }
    })
)


export { useStore }