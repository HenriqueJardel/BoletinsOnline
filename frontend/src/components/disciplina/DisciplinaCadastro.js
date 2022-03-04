import { Container, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from "axios";

function DisciplinaCadastro() {
    const [data, setData] = useState({data: [], cod_disciplina: "", nome_disciplina:"", id: ""})
    

    useEffect(() => {
        axios.get("http://localhost:8080/professores").then(response => {
            data.data = response.data
            console.log(data.data);
        });
    });


    const onChange = (e) => {
        const { name, value} = e.target;
        setData({
          ...data,
          [name]: value,
        });
    }

    const onClick = (id) => {
        console.log(id);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post("http://localhost:8080/disciplinas", data).then((response) => {
            window.location.replace("http://localhost:3000/diciplinas");
        })
    }


    return(
        <Container style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight:550, marginTop: 10}}>
        <Container style={{ width: "1000px", border: "2px solid lightgray", borderRadius: "15px", padding: "15px"}}>
        <p style={{fontSize: "18px"}}>Digite os dados da disciplina</p>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Código da disciplina</Form.Label>
                <Form.Control type="text" placeholder="Digite um código para disciplina" name="cod_disciplina" onChange={(e) => onChange(e)} 
                value={data.cod_disciplina}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nome da disciplina</Form.Label>
                <Form.Control type="text" placeholder="Digite o nome" name="nome_disciplina" onChange={(e) => onChange(e)} 
                value={data.nome_disciplina}/>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
                Cadastrar
            </Button>
        </Form>
        </Container>
    </Container>
    );
}

export default DisciplinaCadastro;