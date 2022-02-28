const sqlite3 = require("sqlite3").verbose();
var db = null;

function openDB() {
    db = new sqlite3.Database("./src/database/mock.db", sqlite3.OPEN_READWRITE, (err) => {});
}

function closeDB() {
    db.close((err) => {})
}

async function createTables() {
    await openDB();
    await db.run('CREATE TABLE IF NOT EXISTS turma(id INTEGER PRIMARY KEY, ano_turma VARCHAR(4))');
    await db.run('CREATE TABLE IF NOT EXISTS aluno( id INTEGER PRIMARY KEY, codigo_matricula INTEGER, nome VARCHAR(255), cpf VARCHAR(11), dt_nascimento DATE, nome_mae VARCHAR(255), nome_pai VARCHAR(255), turma_id INTEGER, FOREIGN KEY(turma_id) REFERENCES turma(id))');
    await db.run('CREATE TABLE IF NOT EXISTS professor(id INTEGER primary key, nome VARCHAR(255), dt_admissao DATE, formacao VARCHAR(255), area_atuacao VARCHAR(255))');
    await db.run('CREATE TABLE IF NOT EXISTS disciplina(id INTEGER PRIMARY KEY, codigo_disciplina VARCHAR(3), nome VARCHAR(255), professor_id Integer, FOREIGN KEY(professor_id) REFERENCES professor(id))');
    await db.run('CREATE TABLE IF NOT EXISTS aluno_disciplina(id INTEGER PRIMARY KEY, aluno_id INTEGER, disciplina_id INTEGER, p1 REAL, p2 REAL, p3 REAL, p4 REAL, FOREIGN KEY(aluno_id) REFERENCES aluno(id), FOREIGN KEY(disciplina_id) REFERENCES disciplina(id))');
    await closeDB();
}

async function findAll(sql) {
   return new Promise((resolve, reject) => {
        openDB();
        db.all(sql, [] , (err, rows) => {
            if(err)
                return reject(err);
            else
                return resolve({rows : rows})
       });
       closeDB();
   })
}

async function insert(sql) {
    openDB();
    db.run(sql);
    closeDB();
}   

async function update(sql, id) {
    openDB();
    db.run(sql + '' + id);
    closeDB();
}

async function erase(sql, id) {
    openDB();
    db.run(sql + '' + id);
    closeDB();
}

module.exports = { openDB, createTables, findAll, insert, update, erase }