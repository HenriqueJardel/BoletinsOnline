const express = require('express');
const app = express();
const port = 8080;

const alunoController = require('./routes/Aluno')
const disciplinaController = require('./routes/Disciplina')
const professorController = require('./routes/Professor')
const turmaController = require('./routes/Turma')
const db = require('./database/database')

app.listen(port, () => {
    console.log('Servidor inciado na porta ' +  port);
});

db.createTables();

app.get('/alunos', alunoController.buscarTodos);
app.get('/disciplinas', disciplinaController.buscarTodos);
app.get('/professores', professorController.buscarTodos);
app.get('/turmas', turmaController.buscarTodos);

app.post('/alunos', alunoController.inserir);
app.post('/disciplinas', disciplinaController.inserir);
app.post('/professores', professorController.inserir);
app.post('/turmas', turmaController.inserir);

app.put('/alunos/:id', alunoController.atualizar);
app.put('/disciplinas/:id', disciplinaController.atualizar);
app.put('/professores/:id', professorController.atualizar);

app.delete('/alunos/:id', alunoController.deletar);
app.delete('/disciplinas/:id', disciplinaController.deletar);
app.delete('/professores/:id', professorController.deletar);
app.delete('/turmas/:id', turmaController.deletar);