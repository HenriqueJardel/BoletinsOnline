const express = require('express');
const app = express();
const port = 8080;

const alunoController = require('./routes/Aluno')
const disciplinaController = require('./routes/Disciplina')
const professorController = require('./routes/Professor')
const turmaController = require('./routes/Turma')

app.listen(port, () => {
    console.log('Servidor inciado na porta ' +  port);
});

app.get('/alunos', alunoController.findAll);
app.get('/disciplinas', disciplinaController.findAll);
app.get('/professores', professorController.findAll);
app.get('/turmas', turmaController.findAll);

app.post('/alunos', alunoController.inserir);
app.post('/disciplinas', disciplinaController.inserir);
app.post('/professores', professorController.inserir);
app.post('/turmas', turmaController.inserir);

app.put('/alunos/:id', alunoController.atualizar);
app.put('/disciplinas/:id', disciplinaController.atualizar);
app.put('/professores/:id', professorController.atualizar);
app.put('/turmas/:id', turmaController.atualizar);

app.delete('/alunos/:id', alunoController.deletar);
app.delete('/disciplinas/:id', disciplinaController.deletar);
app.delete('/professores/:id', professorController.deletar);
app.delete('/turmas/:id', turmaController.deletar);