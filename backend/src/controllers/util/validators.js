function existsOrError(value , msg) {
    if(value === undefined || value === null) throw msg;
    if(typeof value === 'string' && !value.trim()) throw msg;
    if(Array.isArray(value) && value.length === 0) throw msg;
    if(Math.sign(value) == -1) throw msg;
}

module.exports = { existsOrError }