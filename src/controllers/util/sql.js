module.exports = { 
    buscarTodosAlunos: "SELECT a.*, t.ano_turma FROM aluno a JOIN turma t ON (a.turma_id = t.id)",
    BuscarAlunoPeloId: "SELECT * FROM aluno WHERE id = ",
    inserirAluno: "INSERT INTO aluno(nome, cpf, dt_nascimento, nome_mae, nome_pai, turma_id) VALUES ",
    deletarAluno: "DELETE FROM aluno WHERE id = ",
    
    buscarTodasDisciplinas: "SELECT * FROM disciplina",
    buscarDisciplinaPeloId: "SELECT * FROM disciplina WHERE id = ",
    inserirDisciplina: "INSERT INTO disciplina(codigo_disciplina, nome, professor_id) VALUES ",
    deleteDisciplina: "DELETE FROM disciplina WHERE id =",

    buscarTodosProfessores: "SELECT * FROM professor",
    buscarProfessorPeloId: "SELECT * FROM professor WHERE id = ",
    inserirProfessor: "INSERT INTO professor(nome, dt_admissao, formacao, area_atuacao) VALUES ",
    deletarProfessor: "DELETE FROM professor WHERE id = ",

    buscarTodasTurmas: "SELECT * from turma",
    inserirTurma: "INSERT INTO turma(ano_turma) VALUES ",
    deletarTurma: "DELETE FROM turma WHERE id = ",

    buscarTodosBoletins: "SELECT * FROM (SELECT aluno, disciplina, media, (CASE WHEN media > 7 THEN 'Aprovado' WHEN media = 0 THEN 'Notas não inseridas' WHEN media < 7  THEN 'Reprovado' END) as situacao  from (SELECT AVG((ad.p1 + ad.p2 + ad.p3 + ad.p4)/4) AS media, a.nome as aluno, d.nome as disciplina  FROM aluno_disciplina ad JOIN aluno a ON ad.aluno_id = a.id JOIN disciplina d ON ad.disciplina_id = d.id))",
    buscarBoletimPeloId: "SELECT aluno, disciplina, media, (CASE WHEN media > 7 THEN 'Aprovado' WHEN media = 0 THEN 'Notas não inseridas' WHEN media < 7  THEN 'Reprovado' END) as situacao  from (SELECT AVG((ad.p1 + ad.p2 + ad.p3 + ad.p4)/4) AS media, a.nome as aluno, d.nome as disciplina  FROM aluno_disciplina ad JOIN aluno a ON ad.aluno_id = a.id JOIN disciplina d ON ad.disciplina_id = d.id WHERE ad.ID = ",
    inserirBoletim: "INSERT INTO aluno_disciplina(aluno_id, disciplina_id, p1, p2, p3, p4) VALUES "
}

