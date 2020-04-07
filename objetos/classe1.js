class Lancamento {
    constructor(nome = "Generico", valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }
}
/**
 * Em js o suporte a oo está incluso como neste exemplo
 * ajuda a fazer associação entre js e outras tecnologias
 * como java por exemplo
 * existem algumas diferenças como a tipagem e a visibilidade
 * mas mesmo assim é facil fazer um aproveitamento de conhecimento
 */
class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach((l) => this.lancamentos.push(l));
    }

    sumario() {
        let valorConsolidado = 0;
        this.lancamentos.forEach((l) => {
            valorConsolidado += l.valor;
        });
        return valorConsolidado;
    }
}

const salario = new Lancamento("Salario", 45000);
const contaDeLuz = new Lancamento("Luz", -220);

const contas = new CicloFinanceiro(6, 2018);

contas.addLancamentos(salario, contaDeLuz);
console.log(contas.sumario());