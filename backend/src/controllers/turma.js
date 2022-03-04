const db = require('../database/database');
const sql = require('./util/sql');
const validator = require('./util/validators');

async function buscarTodos(res, res) {
    const turmas = await db.find(sql.buscarTodasTurmas);
    return res.json(turmas);
}

async function inserir(req, res) {
    try {
        
        validator.existsOrError(req.body.ano_turma, "Dados incorretos!");

        await db.insert(sql.inserirTurma + "('" + req.body.ano_turma + "')");

        return res.json({
            status: 'sucesso',
            msg: 'inserido com sucesso!'
        });
    
    } catch(err) {
        return res.status(400).json({
            status: "Erro de validação",
            message: err
        });
    }
   
}

async function deletar(req, res) {
    await db.erase(sql.deletarTurma, req.params.id);

    return res.json({
        status: 'sucesso',
        msg: 'Registro removido com sucesso!'
    });
}

module.exports = { buscarTodos, buscarTodos, inserir, deletar }