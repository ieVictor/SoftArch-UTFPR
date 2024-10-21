const Aluno = require('./Aluno');
const Turma = require('./Turma');
const TurmaPresencial = require('./TurmaPresencial');

const aluno1 = new Aluno('João', 'joao123', 'RA123456');
console.log(`Aluno: ${aluno1.nome}, Login: ${aluno1.login}, RA: ${aluno1.RA}`);

const turma1 = new Turma('Turma 101', 7.5);
console.log(`Aprovado na turma 101? ${turma1.aprovado()}`);

const turmaPresencial1 = new TurmaPresencial('Turma 102', 8.0, 80);
console.log(`Aprovado na turma presencial 102? ${turmaPresencial1.aprovado()}`);

const turmaPresencial2 = new TurmaPresencial('Turma 103', 5.5, 60);
console.log(`Aprovado na turma presencial 103? ${turmaPresencial2.aprovado()}`);
