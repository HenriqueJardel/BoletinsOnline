import { Component } from "react";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import axios from "axios";

class Professores extends Component {

    state = {
        data: []
    }

    constructor() {
        super();
    }

    componentDidMount() {
        axios.get("http://localhost:8080/professores").then(response => {
            this.setState({data : response.data})
        })
    }

    render() {
        return (
            <Container style={{ marginTop: 10}}>
                <Row style={{ marginBottom: 10}}>
                    <Col className="d-flex align-items-center"><p style={{ fontWeight: 600}}>Professores Cadastrados</p></Col>
                    <Col className="d-flex align-items-center justify-content-end"><Button onClick={(e) => { window.location.replace("http://localhost:3000/professores/cadastro");}}>Cadastrar</Button></Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Data de admissão</th>
                                    <th>Formação</th>
                                    <th>Area de atuação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map((prof) => 
                                 <tr>
                                 <td>{prof.nome}</td>
                                 <td>{prof.dt_admissao}</td>
                                 <td>{prof.formacao}</td>
                                 <td>{prof.area_atuacao}</td>
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

export default Professores;