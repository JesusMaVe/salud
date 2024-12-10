import { auth } from '../sdk/firebase'
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth'

const signUpService = async (email = '', pass) => {
    try {
        await createUserWithEmailAndPassword(auth, email, pass)

    } catch (error) {
        let errorCode = ''
        errorCode = error.code
        console.log('error in 2nd layer of auth services', errorCode)
    }
}

const signInService = async (email = '', pass) => {
    try {
        await signInWithEmailAndPassword(auth, email, pass)

    } catch (error) {
        let errorCode = ''
        errorCode = error.code
        console.log('error in 2nd layer of auth services', errorCode)
    }
}

const authTokenResolver = (userCallback, claimsCallback, errHandlerCallback) => {
    return onAuthStateChanged(
        auth,
        async (user) => {
            if (user) {
                userCallback(user)
                try {
                    const token = await user.getIdToken(true)
                    if (token.length > 0) {
                        claimsCallback(token)
                    } else {
						claimsCallback(null)
					}

                } catch (e) {
                    console.log(`FB token error: ${e.message}`)
                    if (errHandlerCallback) errHandlerCallback(`FB token error: ${e.message}`)
                }
            }
            claimsCallback(null)

        },
        (err) => {
            userCallback(null)
            if (errHandlerCallback) errHandlerCallback(`FB User: ${err.name}`)

        }
    )
}

const claimsTokenResolver = (userCallback, claimsCallback, errHandlerCallback) => {
    return onAuthStateChanged(
        auth,
        async (user) => {
            if (user) {
                userCallback(user)
                try {
                    const token = await user.getIdTokenResult(true)
                    const { claims } = token
                    if (claims['role'] === 'admin') {
                        claimsCallback(claims.role)
                    }
                    claimsCallback(null)

                } catch (e) {
                    console.log(`FB UserClaims: ${e.name}`)
                    if (errHandlerCallback) errHandlerCallback(`FB UserClaims: ${e.name}`)
                }
            }
            claimsCallback(null)

        },
        (err) => {
            userCallback(null)
            if (errHandlerCallback) errHandlerCallback(`FB User: ${err.name}`)

        }
    )
}

export { signUpService, signInService, authTokenResolver, claimsTokenResolver }
