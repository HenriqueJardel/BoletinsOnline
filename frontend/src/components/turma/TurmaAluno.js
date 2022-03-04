import { Component } from "react";
import { Button, Container, Row, Col, Form} from "react-bootstrap";
import axios from "axios";

class TurmaAluno extends Component {

    state = {
        data: [],
        value: ""
    }

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:8080/alunos").then(response => {
            this.setState({ data: response.data })
        })
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state)
    }


    render() {
        return (
            <Container style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight:550, marginTop: 10}}>
            <Container style={{ width: "1000px", border: "2px solid lightgray", borderRadius: "15px", padding: "15px"}}>
                <Row style={{ marginBottom: 10 }}>
                    <Col className="d-flex align-items-center"><p style={{ fontWeight: 600 }}>Inserir aluno na turma</p></Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Selecione o aluno a ser colocado na turma</Form.Label>
                                <Form.Select aria-label="Default select example" value={this.state.value} onChange={this.handleChange}>
                                    {this.state.data.map((aluno) => 
                                    <option value={aluno}>{aluno.nome}</option>)}
                                </Form.Select>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Cadastrar
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Container>
        );
    }
}

export default TurmaAluno;