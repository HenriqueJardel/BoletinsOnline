function findAll(res, res) {
    return res.json('Alunos buscar')
}

function inserir(req, res) {
    return res.json('Alunos inserir')
}

function atualizar(req, res) {
    return res.json('Alunos atualizar ' + req.params.id);
}

function deletar(req, res) {
    return res.json('Alunos deletar ' + req.params.id)
}

module.exports = { findAll, inserir, atualizar, deletar }
