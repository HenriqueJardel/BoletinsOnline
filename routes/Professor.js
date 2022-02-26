function findAll(res, res) {
    return res.json('Professor buscar')
}

function inserir(req, res) {
    return res.json('Professor inserir')
}

function atualizar(req, res) {
    return res.json('Professor atualizar ' + req.params.id)
}

function deletar(req, res) {
    return res.json('Professor deletar ' + req.params.id)
}

module.exports = { findAll, inserir, atualizar, deletar } 