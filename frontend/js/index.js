const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "../views/404.html",
    "/": "../views/home.html",
    "/alunos": "../views/aluno.html",
    "/professores": "../views/professor.html",
    "/disciplinas": "/../views/disciplina.html",
    "/boletins": "../views/boletins.html"
};

const inverseRoutes = (route) => {
    if(route == "../views/home.html" || route == "../views/404.html") return null;
    if(route == "../views/aluno.html") return "alunos";
    if(route == "../views/professor.html") return "professores";
    if(route == "/../views/disciplina.html") return "disciplinas";
    if(route == "../views/boletins.html") return "boletins";
}

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
    loadData(route);
};

const loadData = (target) => {
    const apiResource = inverseRoutes(target);
    if(apiResource != null) {
        let url = 'http://localhost:8080/' + apiResource;
        
        let tbody = document.getElementById('tbody');
        let data = getAPI(url);
        let json = JSON.parse(data);

        console.log(json);

        if(apiResource == 'alunos') {
            json.rows.forEach(aluno => {
                let linha = criarLinha([aluno.nome, aluno.cpf, aluno.dt_nascimento, aluno.nome_pai, aluno.nome_mae, aluno.turma_id]);
                tbody.appendChild(linha);
            });
        }
        
        if(apiResource == 'disciplinas') {
            json.rows.forEach(disciplina => {
                let linha = criarLinha([disciplina.codigo_disciplina, disciplina.nome, disciplina.professor_id]);
                tbody.appendChild(linha);
            });
        }

        if(apiResource == 'professores') {
            json.rows.forEach(professor => {
                let linha = criarLinha([professor.nome, professor.dt_admissao, professor.formacao, professor.area_atuacao]);
                tbody.appendChild(linha);
            });
        }

        if(apiResource == 'boletins') {
            json.rows.forEach(boletim => {
                let linha = criarLinha([boletim.aluno, boletim.disciplina, boletim.p1, boletim.p2, boletim.p3, boletim.p4, boletim.situacao]);
                tbody.appendChild(linha);
            });
        }
    }
}

const criarLinha = (elements) => {
    let linha = document.createElement('tr');

    for (element of elements) {
        let campo = document.createElement('td');
        
        if(element == 'Reprovado') {
            campo.classList.add('red');
        }

        if(element == 'Aprovado') {
            campo.classList.add('green');
        }

        campo.innerHTML = element;
        linha.appendChild(campo);
    }

    let editar = document.createElement('td');
    let a = document.createElement('a');
    a.href = "#";
    a.innerText = 'Editar';

    editar.appendChild(a);
    linha.appendChild(editar);

    return linha;
}

const getAPI = (url) => {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();