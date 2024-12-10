function typeofHandler(variable, dataType) {
    if (typeof variable === dataType) {
        return true
    }
    return false
}


export { typeofHandler }