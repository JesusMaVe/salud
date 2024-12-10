import { firestore } from "../../sdk/firebase"
import { query, collection, where, onSnapshot } from "firebase/firestore"

const onSnapshotCallback = (querySnapshotData) => {
    const q = query(
        collection(firestore, "lol"),
        where("lol", "==", "lol")
    )
    let unsub = onSnapshot(q,
        (data) => {
            const payload = []
            data.docs.map((doc) => payload.push(doc.data()))
            querySnapshotData(payload)
        },
        (err) => {
            console.error('CUSTOM ERROR', err.message)
        },
        () => {
            console.log('el query ha terminado')
        }
    )
    return unsub
}

export { onSnapshotCallback }