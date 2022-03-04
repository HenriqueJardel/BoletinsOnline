const db = require('../database/database');
const sql = require('./util/sql');
const validator = require('./util/validators');

async function buscarDisciplinaPorId(req, res) {
    try {
        
        const disciplina = await db.find(sql.buscarDisciplinaPeloId + "" + req.params.id);
        validator.existsOrError(disciplina.rows, "Disciplina com id " + req.params.id + " não encontrado!") ;
        return res.json(disciplina);
        
    } catch(err) {
        return res.status(404).json({
            status: "Não encontrado",
            message: err
        });
    } 
}

async function buscarTodos(req, res) {
    const disciplinas = await db.find(sql.buscarTodasDisciplinas);
    return res.json(disciplinas);
}

async function inserir(req, res) { 
    try {
    
        validator.existsOrError(req.body.codigo_disciplina, "Dados incorretos!");
        validator.existsOrError(req.body.nome, "Dados incorretos!");
        validator.existsOrError(req.body.professor_id,"Dados incorretos!");

        await db.insert(sql.inserirDisciplina + "('" + req.body.codigo_disciplina + "', '" + req.body.nome + "', " + req.body.professor_id + ")");

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
        
        validator.existsOrError(req.body.codigo_disciplina, "Dados incorretos!");
        validator.existsOrError(req.body.nome, "Dados incorretos!");
        validator.existsOrError(req.body.professor_id,"Dados incorretos!");

        db.update(sql.atualizarDisciplina + "codigo_disciplina =" + req.body.codigo_disciplina + ", nome =" + req.body.nome + ", " + req.body.professor_id);

        return res.json({
            status: 'sucesso',
            msg: 'atualizado com sucesso!'
        });

    } catch(err) {
        return res.status(400).json({
            status: "Erro de validação",
            message: err
        });
    }
}

async function deletar(req, res) {
    await db.erase(sql.deleteDisciplina, req.params.id);

    return res.json({
        status: 'sucesso',
        msg: 'Registro removido com sucesso!'
    });
}

module.exports = { buscarDisciplinaPorId, buscarTodos, inserir, atualizar, deletar }