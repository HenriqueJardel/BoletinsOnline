const db = require('../database/database');
const sql = require('../database/sql');

async function buscarBoletimPeloId(req, res) {
    const boletim = await db.find(sql.BuscarBoletimPeloId + "" + req.params.id + ")");
    return res.json(boletim);
}

async function buscarTodos(req, res) {
    const boletins = await db.find(sql.buscarTodosBoletins);
    return res.json(boletins);
}

async function inserir(req, res) {
    await db.insert(sql.inserirBoletim + "(" + req.body.aluno_id + ", "  + req.body.disciplina_id + " ," + req.body.p1 + ", " + req.body.p2 + " ," + req.body.p3 + " ," + req.body.p4 + ")");

    return res.json({
        status: 'sucesso',
        msg: 'inserido com sucesso!'
    });
}

module.exports = { buscarBoletimPeloId, buscarTodos, inserir }
