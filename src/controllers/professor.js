const db = require('../database/database');
const sql = require('./util/sql');
const validator = require('./util/validators');

async function buscarProfessorPeloId(req, res) { 
    try {

        const professor = await db.find(sql.buscarProfessorPeloId + "" + req.params.id);
        validator.existsOrError(professor.rows, "Professor com id " + req.params.id + " não encontrado!") ;
        return res.json(professor);
        
    } catch(err) {
        return res.status(404).json({
            status: "Não encontrado",
            message: err
        });
    } 
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
    try {
        
        validator.existsOrError(req.body.nome, "Dados incorretos!");
        validator.existsOrError(req.body.dt_admissao, "Dados incorretos!");
        validator.existsOrError(req.body.formacao, "Dados incorretos!");
        validator.existsOrError(req.body.area_atuacao, "Dados incorretos!");

        await db.update(sql.atualizarProfessor + 'nome =' + req.body.nome + ', dt_admissao =' + req.body.dt_admissao + ', ' + req.body.formacao + ', ' + req.body.area_atuacao);

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
    await db.erase(sql.deletarProfessor, req.params.id);

    return res.json({
        status: 'sucesso',
        msg: 'Registro removido com sucesso!'
    });
}

module.exports = { buscarProfessorPeloId ,buscarTodos, inserir, atualizar, deletar } 