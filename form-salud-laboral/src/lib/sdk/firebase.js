import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseApp = initializeApp({
	apiKey: import.meta.env.VITE_FIREBASE_AK,
	authDomain: import.meta.env.VITE_FIREBASE_ADOM,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
})


export const auth = getAuth(firebaseApp)
export const firestore = getFirestore(firebaseApp)