const db = require('../database/database');
const sql = require('./util/sql');
const validator = require('./util/validators');

async function buscarBoletimPeloId(req, res) {
    const boletim = await db.find(sql.buscarBoletimPeloId + "" + req.params.id + ")");
    return res.json(boletim);
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

module.exports = { buscarBoletimPeloId, buscarTodos, inserir }
