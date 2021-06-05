class Produto {
    constructor(nome, preco, desc = 0.15) {
        this._nome = nome;
        this.preco = preco;
        this.desc = desc;
    }
    get nome() {
        return `Produto: ${this._nome}`;
    }

    get preco() {
        return this._preco;
    }

    set preco(novoPreco) {
        if (novoPreco >= 0) {
            this._preco = novoPreco;
        }
    }

    set nome(novoNome) {
        this._nome = novoNome.toUpperCase();
    }

    get precoFinal() {
        return this.preco * (1 - this.desc);
    }
}

const p1 = new Produto("Caneta", 8.59);
p1.preco = -30;
console.log(p1.nome);
console.log(p1.preco);
const p2 = new Produto("Geladeira", 10000, 0.8);
p2.nome = "cadeira";
console.log(p2.nome);
console.log(p2.preco);
console.log(p2.precoFinal);

console.log(typeof Produto);
