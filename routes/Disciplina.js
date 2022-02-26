function findAll(res, res) {
    return res.json('Disciplina buscar')
}

function inserir(req, res) {
    return res.json('Disciplina inserir')
}

function atualizar(req, res) {
    return res.json( 'Disciplina atualizar ' + req.params.id)
}

function deletar(req, res) {
    return res.json('Disciplina deletar ' + req.params.id)
}

module.exports = { findAll, inserir, atualizar, deletar }