const db = require('../database/database');
const sql = require('../database/sql')

async function buscarTodos(res, res) {
    const turmas = await db.findAll(sql.buscarTodasTurmas);
    return res.json(turmas);
}

async function inserir(req, res) {
    await db.insert(sql.inserirTurma);

    return res.json({
        status: 'sucesso',
        msg: 'inserido com sucesso!'
    });
}

async function deletar(req, res) {
    await db.erase(sql.deletarTurma, req.params.id);

    return res.json({
        status: 'sucesso',
        msg: 'Registro removido com sucesso!'
    });
}

module.exports = { buscarTodos, buscarTodos, inserir, deletar }