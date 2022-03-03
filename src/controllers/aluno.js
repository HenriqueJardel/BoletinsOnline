const db = require('../database/database');
const sql = require('./util/sql');
const validator = require('./util/validators');

async function BuscarAlunoPeloId(req, res) {
    const aluno = await db.find(sql.BuscarAlunoPeloId + "" + req.params.id);
    return res.json(aluno);
}

async function buscarTodos(req, res) {
    const alunos = await db.find(sql.buscarTodosAlunos);
    return res.json(alunos);
}

async function inserir(req, res) {
    try {
        
        validator.existsOrError(req.body.nome, "Dados incorretos!");
        validator.existsOrError(req.body.cpf, "Dados incorretos!");
        validator.existsOrError(req.body.dt_nascimento, "Dados incorretos!");
        validator.existsOrError(req.body.nome_mae, "Dados incorretos!");
        validator.existsOrError(req.body.nome_pai, "Dados incorretos!");
        validator.existsOrError(req.body.turma_id, "Dados incorretos!");

        await db.insert(sql.inserirAluno + " ('" + req.body.nome + "', '" + req.body.cpf + "', '" + req.body.dt_nascimento + "', '" + req.body.nome_mae + "', '" + req.body.nome_pai + "', '" + req.body.turma_id + "')");

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
    await db.erase(sql.deletarAluno, req.params.id);

    return res.json({
        status: 'sucesso',
        msg: 'Registro removido com sucesso!'
    });
}

module.exports = { BuscarAlunoPeloId, buscarTodos, inserir, atualizar, deletar }
