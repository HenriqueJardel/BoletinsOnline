module.exports = { 
    buscarTodosAlunos: "SELECT * FROM aluno",
    BuscarAlunoPeloId: "SELECT * FROM aluno WHERE id = ",
    inserirAluno: "INSERT INTO aluno(id, codigo_matricula, nome, cpf, dt_nascimento, nome_mae, nome_pai, turma_id) VALUES",
    deletarAluno: "DELETE FROM aluno WHERE id = ",
    
    buscarTodasDisciplinas: "SELECT * FROM disciplina",
    buscarDisciplinaPeloId: "SELECT * FROM disciplina WHERE id = ",
    inserirDisciplina: "INSERT INTO disciplina(id, codigo_disciplina, nome, professor_id) VALUES ",
    deleteDisciplina: "DELETE FROM disciplina WHERE id =",

    buscarTodosProfessores: "SELECT * FROM professor",
    buscarProfessorPeloId: "SELECT * FROM professor WHERE id = ",
    inserirProfessor: "INSERT INTO professor(id, nome, dt_admissao, formacao, area_atuacao) VALUES ",
    deletarProfessor: "DELETE FROM professor WHERE id = ",

    buscarTodasTurmas: "SELECT * from turma",
    inserirTurma: "INSERT INTO turma(id, ano_turma) VALUES ",
    deletarTurma: "DELETE FROM turma WHERE id = ",

    buscarBoletins: "SELECT a.nome, d.nome, ad.p1, ad.p2, ad.p3, ad.p4, AVG((ad.p1 + ad.p2 + ad.p3 + ad.p4)/4) AS MEDIA FROM aluno a join aluno_disciplina ad on a.id = ad.aluno_id join disciplina d on d.id = ad.disciplina_id ",
    inserirNotas: "INSERT INTO aluno_disciplina(id, aluno_id, disciplina_id, p1, p2, p3, p4) VALUES"
}

