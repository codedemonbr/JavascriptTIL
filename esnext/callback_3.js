const nums = [1, 2, 3, 4, 5];

const todoEls = (n, i, a) => n * 2 + i + a.length;
const dobro = (n) => n * 2;
console.log(nums.map(dobro));

const nomes = ["Ana", "Bia", "Gui", "Lia", "Rafa"];
const primeiraLetra = (texto) => texto[0];
const letras = nomes.map(primeiraLetra);
console.log(nomes, letras);

const carrinho = [
    { nome: "Caneta", qtde: 10, preco: 7.99 },
    { nome: "Impressora", qtde: 0, preco: 649.5 },
    { nome: "Caderno", qtde: 4, preco: 27.1 },
    { nome: "Lapis", qtde: 3, preco: 5.82 },
    { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

console.log(carrinho.map((el) => el.nome));
console.log(carrinho.map((el) => el.qtde * el.preco));
