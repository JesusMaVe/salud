import { query, collection, onSnapshot } from "firebase/firestore"

const useFirestore = (firestore, collectionName, setData, setLoading, setError, queryConstraints = []) => {
    const colRef = collection(firestore, collectionName)
    const q = query(colRef, ...queryConstraints)

    let unsubscribe = onSnapshot(
        q,
        (snapshot) => {
            // let cont = 0
            const payload = snapshot.docs.map((doc, i) => {
                // cont += i
                // if (cont === 1) {
                //     const entityIds = Object.keys(doc).filter((key) => key === expectedId)
                //     const entityId = entityIds[0]
                //     setEntityId(entityId)
                // }
                return { id: doc.id, ...doc.data() }
            })
            setData(payload)
            setLoading(false)
        },
        (err) => {
            setError({ ...err })
            setLoading(false)
        },
        () => {
            console.log(`ya finalizo para ${collectionName}`)
        }
    )
    return unsubscribe
}

export { useFirestore }