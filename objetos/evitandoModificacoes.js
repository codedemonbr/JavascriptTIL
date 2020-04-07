const produto = Object.preventExtensions({
    nome: "Qualquer",
    preco: 1.99,
    tag: "promoção",
});
console.log("Extensivel:", Object.isExtensible(produto));
/**
 * Prevenindo extensões:
 * não é possivel adicionar nenhuma propriedade
 * exemplo abaixo
 */
produto.nome = "Borracha";
produto.descricao = "Borracha escolar branca";
delete produto.tag;
console.log(produto);
/**
 * Selar um objeto é algo interessante.
 * Conseguimos  modificar as propriedades,
 * mas não podemos adicionar mais propriedades.
 * Tambpem não é possivel remover.
 */
const pessoa = { nome: "Juliana", idade: 35 };
Object.seal(pessoa);
console.log("Selado:", Object.isSealed(pessoa));

pessoa.sobrenome = "Silva";
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);