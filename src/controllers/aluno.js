const db = require('../database/database');
const sql = require('../database/sql');

async function BuscarAlunoPeloId(req, res) {
    const aluno = await db.find(sql.BuscarAlunoPeloId + "" + req.params.id);
    return res.json(aluno);
}

async function buscarTodos(req, res) {
    const alunos = await db.find(sql.buscarTodosAlunos);
    return res.json(alunos);
}

async function inserir(req, res) {
    
    await db.insert(sql.inserirAluno + " ('" + req.body.nome + "', '" + req.body.cpf + "', '" + req.body.dt_nascimento + "', '" + req.body.nome_mae + "', '" + req.body.nome_pai + "', '" + req.body.turma_id + "')");

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

module.exports = { BuscarAlunoPeloId, buscarTodos, inserir, atualizar, deletar }
