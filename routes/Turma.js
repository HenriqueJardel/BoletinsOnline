function findAll(res, res) {
    return res.json('Turma buscar')
}

function inserir(req, res) {
    return res.json('Turma inserir')
}

function atualizar(req, res) {
    return res.json('Turma atualizar ' + req.params.id)
}

function deletar(req, res) {
    return res.json('Turma deletar ' + req.params.id)
}

module.exports = { findAll, inserir, atualizar, deletar }