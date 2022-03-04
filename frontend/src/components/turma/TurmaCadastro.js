import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from "axios";

function TurmaCadastro() {
    const [data, setData] = useState({ano_turma:""})

        const onChange = (e) => {
            const { name, value} = e.target;
            setData({
            ...data,
            [name]: value,
            });
        }

      const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post("http://localhost:8080/turmas", data).then((response) => {
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
                <Form.Label>Digite o ano da turma</Form.Label>
                <Form.Control type="text" placeholder="Ano" name="ano_turma" onChange={(e) => onChange(e)} 
                value={data.ano_turma}/>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
                Cadastrar
            </Button>
        </Form>
        </Container>
    </Container>
    );
}

export default TurmaCadastro;
