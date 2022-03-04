import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from "axios";

function AlunoCadastro() {
        
    const [data, setData] = useState({cpf: "", nome:"", dt_nascimento:"", idade: "", nome_mae: "", nome_pai:""})
    
    const onChange = (e) => {
        const { name, value} = e.target;
        setData({
        ...data,
        [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post("http://localhost:8080/alunos", data).then((response) => {
            window.location.replace("http://localhost:3000/");
        })
    }
  
  
    const required = (value) => {
        return value.length === 0;
    }

    return(
        <Container style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight:550, marginTop: 10}}>
        <Container style={{ width: "1000px", border: "2px solid lightgray", borderRadius: "15px", padding: "15px"}}>
        <p style={{fontSize: "18px"}}>Digite os dados do Aluno</p>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>CPF</Form.Label>
                <Form.Control type="text" placeholder="Digite o cpf" name="cpf" onChange={(e) => onChange(e)} 
                value={data.cpf}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Digite o nome" name="nome" onChange={(e) => onChange(e)} 
                value={data.nome}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Data de nascimento</Form.Label>
                <Form.Control type="text" placeholder="Digite a data de nascimento (dia/mes/ano)" name="dt_nascimento" onChange={(e) => onChange(e)} 
                value={data.dt_nascimento}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Idade</Form.Label>
                <Form.Control type="text" placeholder="Digite a idade" name="idade" onChange={(e) => onChange(e)} 
                value={data.idade}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nome do mãe</Form.Label>
                <Form.Control type="text" placeholder="Digite o nome da mãe" name="nome_mae" onChange={(e) => onChange(e)} 
                value={data.nome_mae}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nome do pai</Form.Label>
                <Form.Control type="text" placeholder="Digite sua senha" name="nome_pai" onChange={(e) => onChange(e)} 
                value={data.nome_pai}/>
            </Form.Group>
            
            <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
                Cadastrar
            </Button>
        </Form>
        </Container>
    </Container>
    );
}

export default AlunoCadastro;
