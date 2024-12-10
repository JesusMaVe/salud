import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/auth/layerZero/authSlice'
import orchestationReducer from '../slices/orchestation/layerZero/orchestationSlice'

const configuratedStore = configureStore({
	reducer: {
		gAuth: authReducer,
		orchestation: orchestationReducer
	}
})

export { configuratedStore }
