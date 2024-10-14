const Turma = require('./Turma');

class TurmaPresencial extends Turma {
    constructor(codigo, nota, frequencia) {
        super(codigo, nota);
        this.frequencia = frequencia;
    }

    aprovado() {
        return this.nota >= 6.0 && this.frequencia >= 80;
    }
}

module.exports = TurmaPresencial;
