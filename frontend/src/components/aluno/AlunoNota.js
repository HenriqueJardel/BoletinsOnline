import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';


function AlunoNota() {
    
    const [data, setData] = useState({prova1: "", prova2:"", prova3:"", prova4: "", trabalho: ""})

    const l = window.location.href;
    const id = l.substring(l.lastIndexOf('/') + 1);
    const url = 'http://localhost:8080/boletins/' + id;

    console.log(id);

    const onChange = (e) => {
        const { name, value} = e.target;
        setData({
        ...data,
        [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const boletim = {
            prova1: parseInt(data.prova1),
            prova2: parseInt(data.prova2),
            prova3: parseInt(data.prova3),
            prova4: parseInt(data.prova4),
            trabalho: parseInt(data.trabalho)
        }

        axios.post(url, boletim).then((response)=> {
            window.alert("notas incluída com sucesso!")
        })
    }

    return (
        <Container style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight:550, marginTop: 10}}>
        <Container style={{ width: "1000px", border: "2px solid lightgray", borderRadius: "15px", padding: "15px"}}>
        <p style={{fontSize: "18px"}}>Digite as notas do aluno abaixo:</p>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Prova 1</Form.Label>
                <Form.Control type="number" placeholder="Digite a nota da prova 1" name="prova1" onChange={(e) => onChange(e)} 
                value={data.prova1}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Prova 2</Form.Label>
                <Form.Control type="number" placeholder="Digite a nota da prova 2" name="prova2" onChange={(e) => onChange(e)} 
                value={data.prova2}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Prova 3</Form.Label>
                <Form.Control type="number" placeholder="Digite a nota prova 3" name="prova3" onChange={(e) => onChange(e)} 
                value={data.prova3}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Prova 4</Form.Label>
                <Form.Control type="text" placeholder="Digite a nota prova 4" name="prova4" onChange={(e) => onChange(e)} 
                value={data.prova4}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Trabalho</Form.Label>
                <Form.Control type="text" placeholder="Digite a nota do trabalho" name="trabalho" onChange={(e) => onChange(e)} 
                value={data.trabalho}/>
            </Form.Group>
            
            <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
                Cadastrar
            </Button>
        </Form>
        </Container>
    </Container>
    );
}

export default AlunoNota;