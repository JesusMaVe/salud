import { create } from 'zustand'

const useFormStore = create((set) => ({
    inputValue: {},
    setInputValue: (newValue) => {
        set({ inputValue: newValue })
    }
}))

const useScoreFormatStore = create((set) => ({
    scoreFormat: {},
    setScoreFormat: (newScore) => {
        set({ scoreFormat: newScore })
    }
}))

const useRequestBodyStore = create((set) => ({
    requestBody: {},
    setRequestBody: (newValue) => {
        set({ requestBody: newValue })
    }
}))

export { useFormStore, useScoreFormatStore, useRequestBodyStore }