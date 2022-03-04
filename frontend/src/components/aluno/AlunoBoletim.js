import { Component,  } from "react";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import axios from "axios";

class AlunoBoletim extends Component {

    state = {
        data: []
    }

    constructor() {
        super();
    }

    componentDidMount() {
        const id = this.props.id;
        const query = "http://localhost:8080/alunos/" + id;

        axios.get(query).then(response => {
            this.setState({data : response.data})
        });
    }

    render() {
        return (
            <Container style={{ marginTop: 10}}>
                <Row>
                    <Col>
                        <p style={{ fontWeight: 600}}>Aluno</p>
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
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.data.cod_matricula}</td>
                                    <td>{this.state.data.cpf}</td>
                                    <td>{this.state.data.nome}</td>
                                    <td>{this.state.data.dt_nascimento}</td>
                                    <td>{this.state.data.idade}</td>
                                    <td>{this.state.data.nome_mae}</td>
                                    <td>{this.state.data.nome_pai}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <p style={{ fontWeight: 600}}>Boletim</p>
                        <Table striped bordered hover>
                        <thead>
                                <tr>
                                    <th>Prova 1</th>
                                    <th>Prova 2</th>
                                    <th>Prova 3</th>
                                    <th>Prova 4</th>
                                    <th>Trabalho</th>
                                    <th>Média</th>
                                    <th>Média Geral</th>
                                    <th>Situação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.data.boletim?.prova1}</td>
                                    <td>{this.state.data.boletim?.prova2}</td>
                                    <td>{this.state.data.boletim?.prova3}</td>
                                    <td>{this.state.data.boletim?.prova4}</td>
                                    <td>{this.state.data.boletim?.trabalho}</td>
                                    <td>{this.state.data.boletim?.media}</td>
                                    <td>{this.state.data.boletim?.mediaGeral}</td>
                                    <td style={{ color: "#CA3111", fontWeight: 600}}>{this.state.data.boletim?.situacao}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AlunoBoletim;