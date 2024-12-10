// const cf1 = import.meta.env.VITE_CF1
const cf2 = import.meta.env.VITE_CF2
import { auth } from "../sdk/firebase"
import { getIdToken } from "firebase/auth"

// async function authyCallback(token, arr) {
// 	const opts = {
// 		method: 'POST',
// 		headers: {
// 		Authorization: `Bearer ${token}`,
// 			'Content-Type': 'application/json'
// 		},
// 		body: "json"
// 	}
// 	const options = {
// 		...opts,
// 		body: JSON.stringify(arr)
// 	}
// 	try {
// 		const r = await fetch(cf1, options)
// 		const j = await r.json()
// 		console.log(j)
// 	} catch (e) {
// 		console.log(ie)
// 	}
// }

async function adminsCallback(token) {
	const options = {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		}
	}
	try {
		const r = await fetch(cf2, options)
		const j = await r.json()
		console.log(j)
	} catch (e) {
		console.log(ie)
	}
}


// const authy = async () => {
// 	// if (Array.isArray(coursesArray) && coursesArray.length > 0) {
// 		getIdToken(auth.currentUser, true)
// 		.then(async (userToken) => {
// 			// await authyCallback(userToken, coursesArray)
// 			await adminsCallback(userToken)
// 		})
// 	// }
// 	// console.log("pasaste como argumento un arreglo vacio")
// }


export { adminsCallback }