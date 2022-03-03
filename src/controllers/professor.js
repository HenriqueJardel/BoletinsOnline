const db = require('../database/database');
const sql = require('./util/sql');
const validator = require('./util/validators');

async function buscarProfessorPeloId(req, res) { 
    const professor = await db.find(sql.buscarProfessorPeloId + "" + req.params.id);
    return res.json(professor);
}

async function buscarTodos(res, res) {
    const professores = await db.find(sql.buscarTodosProfessores);
    return res.json(professores);
}

async function inserir(req, res) {
    try {
        
        validator.existsOrError(req.body.nome, "Dados incorretos!");
        validator.existsOrError(req.body.dt_admissao, "Dados incorretos!");
        validator.existsOrError(req.body.formacao, "Dados incorretos!");
        validator.existsOrError(req.body.area_atuacao, "Dados incorretos!");

        await db.insert(sql.inserirProfessor + "('" + req.body.nome + "', '" + req.body.dt_admissao + "', '" + req.body.formacao + "', '" + req.body.area_atuacao + "')");

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

module.exports = { buscarProfessorPeloId ,buscarTodos, inserir, atualizar, deletar } 