const produtos = [
    { nome: "notebook", preco: 3000, fragil: true },
    { nome: "batata", preco: 5, fragil: false },
    { nome: "phone", preco: 2000, fragil: true },
    { nome: "tanque", preco: 9879878, fragil: false },
];

console.log(
    produtos.filter(function(p) {
        return false;
    })
);

const caro = (produto) => produto.preco >= 500;
const fragil = (produto) => produto.fragil;

const robusto = (produto) => !produto.fragil;
const barato = (produto) => produto.preco < 500;

console.log(produtos.filter(robusto));
console.log(produtos.filter(barato));

console.log(produtos.filter(caro).filter(fragil));