const db = require('../database/database');
const sql = require('./util/sql');
const validator = require('./util/validators');

async function buscarBoletimPeloId(req, res) {
    try {

        const boletim = await db.find(sql.buscarBoletimPeloId + "" + req.params.id + ")");
        validator.existsOrError(boletim.rows, "Boletim com id " + req.params.id + " não encontrado!") ;
        return res.json(boletim);
        
    } catch(err) {
        return res.status(404).json({
            status: "Não encontrado",
            message: err
        }); 
    } 
}

async function buscarTodos(req, res) {
    const boletins = await db.find(sql.buscarTodosBoletins);
    return res.json(boletins);
}

async function inserir(req, res) {
    try {
        
        validator.existsOrError(req.body.aluno_id, "Dados incorretos!");
        validator.existsOrError(req.body.disciplina_id, "Dados incorretos!");
        validator.existsOrError(req.body.p1, "Dados incorretos!");
        validator.existsOrError(req.body.p2, "Dados incorretos!");
        validator.existsOrError(req.body.p3, "Dados incorretos!");
        validator.existsOrError(req.body.p4, "Dados incorretos!");

        await db.insert(sql.inserirBoletim + "(" + req.body.aluno_id + ", "  + req.body.disciplina_id + " ," + req.body.p1 + ", " + req.body.p2 + " ," + req.body.p3 + " ," + req.body.p4 + ")");

        return res.json({
            status: 'sucesso',
            msg: 'inserido com sucesso!'
        });
    } catch(err) {
        return res.status(500).json({
            status: "Erro de",
            message: err
        });
    }
}

async function atualizar(req, res) {
    try {

        validator.existsOrError(req.body.aluno_id, "Dados incorretos!");
        validator.existsOrError(req.body.disciplina_id, "Dados incorretos!");
        validator.existsOrError(req.body.p1, "Dados incorretos!");
        validator.existsOrError(req.body.p2, "Dados incorretos!");
        validator.existsOrError(req.body.p3, "Dados incorretos!");
        validator.existsOrError(req.body.p4, "Dados incorretos!");

        await db.update(sql.atualizarBoletim + "p1 =" + req.body.p1 + ", p2 =" + req.body.p2 + ", p3 =" + req.params.p3 + ", p4" + req.params.p4, 
        req.params.id);

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

module.exports = { buscarBoletimPeloId, buscarTodos, inserir, atualizar }
