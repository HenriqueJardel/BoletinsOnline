const db = require('../database/database');
const sql = require('../database/sql');

async function buscarTodos(res, res) {
    const alunos = await db.findAll(sql.buscarTodosAlunos);
    return res.json(alunos);
}

async function inserir(req, res) {
    await db.insert(sql.inserirAluno);

    return res.json({
        status: 'sucesso',
        msg: 'inserido com sucesso!'
    });
}

async function atualizar(req, res) {
    return res.json('Professor atualizar ' + req.params.id)
}

async function deletar(req, res) {
    await db.erase(sql.deletarAluno, req.params.id);

    return res.json({
        status: 'sucesso',
        msg: 'Registro removido com sucesso!'
    });
}

module.exports = { buscarTodos, inserir, atualizar, deletar }
