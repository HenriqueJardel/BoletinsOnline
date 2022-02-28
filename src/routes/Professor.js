const db = require('../database/database');
const sql = require('../database/sql')

async function buscarTodos(res, res) {
    const professores = await db.findAll(sql.buscarTodosProfessores);
    return res.json(professores);
}

async function inserir(req, res) {
    await db.insert(sql.inserirProfessor);

    return res.json({
        status: 'sucesso',
        msg: 'inserido com sucesso!'
    });
}

async function atualizar(req, res) {
    return res.json('Professor atualizar ' + req.params.id)
}

async function deletar(req, res) {
    await db.erase(sql.deletarProfessor, req.params.id);

    return res.json({
        status: 'sucesso',
        msg: 'Registro removido com sucesso!'
    });
}

module.exports = { buscarTodos, inserir, atualizar, deletar } 