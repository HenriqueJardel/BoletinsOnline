import { Component } from "react";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import axios from "axios";
import icon1 from '../../assets/clipboard-data.svg';
import icon2 from '../../assets/clipboard-check.svg';

class Alunos extends Component {

    state = {
        data: []
    }

    constructor() {
        super();
    }

    componentDidMount() {
        axios.get("http://localhost:8080/alunos").then(response => {
            this.setState({data : response.data})
        });
    }

   

    render() {
        return (
            <Container style={{ marginTop: 10}}>
                <Row style={{ marginBottom: 10}}>
                    <Col className="d-flex align-items-center"><p style={{ fontWeight: 600}}><i class="fas fa-user-graduate"></i>Alunos Cadastrados</p></Col>
                    <Col className="d-flex align-items-center justify-content-end">
                        <Button onClick={(e) => { window.location.replace("http://localhost:3000/alunos/notas/all");}}>Cadastrar notas para todos</Button> 
                        <Button onClick={(e) => { window.location.replace("http://localhost:3000/aluno/cadastro");}} style={{ marginLeft: 15}}>Cadastrar Aluno</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Codigo Matricula</th>
                                    <th>CPF</th>
                                    <th>Nome</th>
                                    <th>Data de nascimento</th>
                                    <th>Idade</th>
                                    <th>Nome do pai</th>
                                    <th>Nome da mãe</th>
                                    <th>Ver Boletim</th>
                                    <th>Inserir notas</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map((aluno) => 
                                 <tr>
                                 <td>{aluno.cod_matricula}</td>
                                 <td>{aluno.cpf}</td>
                                 <td>{aluno.nome}</td>
                                 <td>{aluno.dt_nascimento}</td>
                                 <td>{aluno.idade}</td>
                                 <td>{aluno.nome_mae}</td>
                                 <td>{aluno.nome_pai}</td>
                                 <td><img onClick={(e) => { let query = "http://localhost:3000/alunos/boletim/" + aluno.cod_matricula; window.location.replace(query);}} src={icon1}/></td>
                                 <td><img src={icon2} onClick={(e) => { let query = "http://localhost:3000/alunos/notas/" + aluno.cod_matricula; window.location.replace(query);}}/></td>
                               </tr>
                               )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Alunos;