import { Container, Row, Col } from 'react-bootstrap';
import { Fragment } from 'react';
import { Router } from '@reach/router';

import Menu from './components/Menu';

import Alunos from './components/aluno/Alunos';
import AlunoCadastro from './components/aluno/AlunoCadastro';
import AlunoBoletim from './components/aluno/AlunoBoletim';
import AlunoNota from './components/aluno/AlunoNota';

import Disciplinas from './components/disciplina/Disciplinas';
import DisciplinaCadastro from './components/disciplina/DisciplinaCadastro';

import Professores from './components/professor/Professores';
import ProfessorCadastro from './components/professor/ProfessorCadastro';

import Turmas from './components/turma/Turmas';
import TurmaCadastro from './components/turma/TurmaCadastro';
import TurmaAluno from './components/turma/TurmaAluno';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container fluid style={{height: "100%", width: "100%", margin: 0, padding: 0}}>
        <Row>
          <Col><Menu></Menu></Col>
        </Row>
        <Row style={{ minHeight: "600px"}}>
          <Fragment>
              <Router>
                  <Alunos path="/"></Alunos>
                  <AlunoCadastro path="/aluno/cadastro"></AlunoCadastro>
                  <AlunoBoletim path="alunos/boletim/:id"></AlunoBoletim>
                  <AlunoNota path="alunos/notas/:id"></AlunoNota>
                  <Disciplinas path="/disciplinas"></Disciplinas>
                  <DisciplinaCadastro path="disciplinas/cadastro"></DisciplinaCadastro>
                  <Professores path="/professores"></Professores>
                  <ProfessorCadastro path="professores/cadastro"></ProfessorCadastro>
                  <Turmas path="/turmas"></Turmas>
                  <TurmaCadastro path="turmas/cadastro"></TurmaCadastro>
                  <TurmaAluno path="turmas/cadastro/aluno"></TurmaAluno>
              </Router>
          </Fragment>
        </Row>
    </Container>
  );
}

export default App;
