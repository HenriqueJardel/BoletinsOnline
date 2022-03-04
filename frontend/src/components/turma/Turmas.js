import { Component } from "react";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import axios from "axios";
import icon from '../../assets/person-plus-fill.svg';

class Turmas extends Component {

    state = {
        data: []
    }

    constructor() {
        super();
    }

    componentDidMount() {
        axios.get("http://localhost:8080/turmas").then(response => {
            this.setState({data : response.data})
        })
    }

    render() {
        return (
            <Container style={{ marginTop: 10}}>
                <Row style={{ marginBottom: 10}}>
                    <Col className="d-flex align-items-center"><p style={{ fontWeight: 600}}>Turmas cadastradas</p></Col>
                    <Col className="d-flex align-items-center justify-content-end"><Button onClick={(e) => { window.location.replace("http://localhost:3000/turmas/cadastro");}}>Cadastrar</Button></Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Ano da Turma</th>
                                    <th>Adcionar Alunos</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map((turma) => 
                                 <tr>
                                 <td>{turma.ano_turma}</td>
                                 <td><img src={icon} style={{width: "25px"}}/></td>
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

export default Turmas;