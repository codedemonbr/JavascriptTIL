/**
 * Um set não aceita repetição, também não é indexado
 */

const times = new Set();
times.add('Vasco');
times.add('São Paulo').add('Santos').add('Curintia');
times.add('Flamengo');
times.add('São Paulo'); //Não adicionado pois já estava no set
console.log(times);
console.log(times.size);
console.log(times.has('vasco'));
console.log(times.has('Vasco'));
times.delete('Flamengo');
console.log(times.has('Flamengo'));

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'];
const nomesSet = new Set(nomes);
console.log(nomesSet);