Array.prototype.filter2 = function(callback) {
    const newArray = [];
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) {
            newArray.push(this[index]);
        }
    }
    return newArray;
};

const produtos = [
    { nome: "notebook", preco: 3000, fragil: true },
    { nome: "batata", preco: 5, fragil: false },
    { nome: "phone", preco: 2000, fragil: true },
    { nome: "tanque", preco: 9879878, fragil: false },
];

const caro = (produto) => produto.preco >= 500;
const fragil = (produto) => produto.fragil;

const robusto = (produto) => !produto.fragil;
const barato = (produto) => produto.preco < 500;

console.log(produtos.filter2(robusto));
console.log(produtos.filter2(barato));

console.log(produtos.filter2(caro).filter2(fragil));