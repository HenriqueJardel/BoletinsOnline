import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from "axios";

function ProfessorCadastro() {
    const [data, setData] = useState({ nome:"", dt_admissao:"", formacao: "", area_atuacao: ""})

        const onChange = (e) => {
            const { name, value} = e.target;
            setData({
            ...data,
            [name]: value,
            });
        }

      const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post("http://localhost:8080/professores", data).then((response) => {
            window.location.replace("http://localhost:3000/");
        })
      }
  
  
      const required = (value) => {
        return value.length === 0;
      }

    return(
        <Container style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight:550, marginTop: 10}}>
        <Container style={{ width: "1000px", border: "2px solid lightgray", borderRadius: "15px", padding: "15px"}}>
        <p style={{fontSize: "18px"}}>Digite os dados do professor</p>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Digite o nome</Form.Label>
                <Form.Control type="text" placeholder="Nome" name="nome" onChange={(e) => onChange(e)} 
                value={data.nome}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Digite a data de admissão</Form.Label>
                <Form.Control type="text" placeholder="Ex: 10/01/1985" name="dt_admissao" onChange={(e) => onChange(e)} 
                value={data.dt_admissao}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Digite a formação do professor</Form.Label>
                <Form.Control type="text" placeholder="Formação" name="formacao" onChange={(e) => onChange(e)} 
                value={data.formacao}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Digite a area de atuação</Form.Label>
                <Form.Control type="text" placeholder="Atuação" name="area_atuacao" onChange={(e) => onChange(e)} 
                value={data.area_atuacao}/>
            </Form.Group>
            
            <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
                Cadastrar
            </Button>
        </Form>
        </Container>
    </Container>
    );
}

export default ProfessorCadastro;
