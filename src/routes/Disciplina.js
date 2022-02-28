const db = require('../database/database');
const sql = require('../database/sql');

async function buscarTodos(req, res) {
    const disciplinas = await db.findAll(sql.buscarTodasDisciplinas);
    return res.json(disciplinas);
}

async function inserir(req, res) {
    await db.insert(sql.inserirDisciplina);

    return res.json({
        status: 'sucesso',
        msg: 'inserido com sucesso!'
    });
}

async function atualizar(req, res) {
    return res.json('Professor atualizar ' + req.params.id)
}

async function deletar(req, res) {
    await db.erase(sql.deleteDisciplina, req.params.id);

    return res.json({
        status: 'sucesso',
        msg: 'Registro removido com sucesso!'
    });
}

module.exports = { buscarTodos, inserir, atualizar, deletar }