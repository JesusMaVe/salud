const useEntitiesJoin = (entityOneTuples, entityTwoTuples, tupleInnerId, tupleId, payloadCB) => {
    const join = []
    
    for (const tuple1 of entityOneTuples) {
        for (const tuple2 of entityTwoTuples) {
            const isMatch = tuple1[tupleInnerId] === tuple2[tupleId]
            if (isMatch) {
                join.push({ ...tuple1, ...tuple2 })
            }
        }
    }

    payloadCB(join)
}

export { useEntitiesJoin }