import { Component } from "react";
import { Container, Nav, Navbar} from 'react-bootstrap';

class Menu extends Component {

    state = {
        data: []
    }

    constructor() {
        super();
    }

    componentDidMount() {

    }

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container style={{ margin: 0}}>
                    <Navbar.Brand href="/">Sistema de Boletins</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Alunos</Nav.Link>
                        <Nav.Link href="/turmas">Turmas</Nav.Link>
                        <Nav.Link href="/disciplinas">Diciplinas</Nav.Link>
                        <Nav.Link href="/professores">Professores</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default Menu;