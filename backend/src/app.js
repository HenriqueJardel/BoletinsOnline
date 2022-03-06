const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

const alunoController = require('./controllers/aluno')
const disciplinaController = require('./controllers/disciplina')
const professorController = require('./controllers/professor')
const turmaController = require('./controllers/turma')
const boletimController = require('./controllers/boletins');

const db = require('./database/database')

app.listen(port, () => {
    console.log('Servidor inciado na porta ' +  port);
});

db.createTables();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

app.get('/alunos', alunoController.buscarTodos);
app.get('/alunos/:id', alunoController.BuscarAlunoPeloId);
app.get('/disciplinas', disciplinaController.buscarTodos);
app.get('/disciplinas/:id', disciplinaController.buscarDisciplinaPorId);
app.get('/professores', professorController.buscarTodos);
app.get('/professores/:id', professorController.buscarProfessorPeloId);
app.get('/boletins', boletimController.buscarTodos);
app.get('/boletins/:id', boletimController.buscarBoletimPeloId);
app.get('/turmas', turmaController.buscarTodos);

app.post('/alunos', alunoController.inserir);
app.post('/disciplinas', disciplinaController.inserir);
app.post('/professores', professorController.inserir);
app.post('/boletins', boletimController.inserir);
app.post('/turmas', turmaController.inserir);

app.put('/alunos/:id', alunoController.atualizar);
app.put('/disciplinas/:id', disciplinaController.atualizar);
app.put('/professores/:id', professorController.atualizar);
app.put('/boletins/:id', boletimController.atualizar);

app.delete('/alunos/:id', alunoController.deletar);
app.delete('/disciplinas/:id', disciplinaController.deletar);
app.delete('/professores/:id', professorController.deletar);
app.delete('/turmas/:id', turmaController.deletar);