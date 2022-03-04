import { Component } from "react";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import axios from "axios";

class Disciplinas extends Component {

    state = {
        data: []
    }

    constructor() {
        super();
    }

    componentDidMount() {
        axios.get("http://localhost:8080/disciplinas").then(response => {
            console.log(response)
            this.setState({data : response.data})
        })
    }

    render() {
        return (
            <Container style={{ marginTop: 10}}>
                <Row style={{ marginBottom: 10}}>
                    <Col className="d-flex align-items-center"><p style={{ fontWeight: 600}}>Disciplinas Cadastradas</p></Col>
                    <Col className="d-flex align-items-center justify-content-end"><Button onClick={(e) => { window.location.replace("http://localhost:3000/disciplinas/cadastro");}}>Cadastrar</Button></Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Codigo da Disciplina</th>
                                    <th>Nome da disciplina</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map((dic) => 
                                 <tr>
                                 <td>{dic.cod_disciplina}</td>
                                 <td>{dic.nome_disciplina}</td>
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

export default Disciplinas;