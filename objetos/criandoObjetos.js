//notação literal
const obj1 = {};
console.log(obj1);

//Objeto js
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

//funcoes construtoras
function Produto(nome, preco, desc) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    };
}

const p1 = new Produto("Caneta", 7.99, 0.15);
const p2 = new Produto("Notebook", 2998.99, 0.25);
console.log(p1);
console.log(p2);
console.log(p1.getPrecoComDesconto());
console.log(p2.getPrecoComDesconto());

//Funcao Factory
function CriarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        },
    };
}

const f1 = CriarFuncionario("Joao", 7980, 4);
const f2 = CriarFuncionario("Maria", 11400, 1);

console.log(f1.getSalario(), f2.getSalario());
console.log(f1);
console.log(f2);

//Object.create
const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

//função retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info);