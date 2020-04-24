const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
];

// Desafio 1: Todos os alunos são bolsista?
const ehBolsista = (a) => a.bolsista; //usada para filtrar bolsistas

const resultado = alunos.map(ehBolsista).reduce(function(acumulador, atual) {
    return acumulador + atual;
});
console.log(!resultado);

//solução do curso
const todosBolsistas

// Desafio 2: Algum aluno é bolsista?
console.log(Boolean(resultado));