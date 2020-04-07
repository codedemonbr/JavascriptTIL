console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);
/**
 * tudo eh uma funcao em js
 */
String.prototype.reverse = function() {
    return this.split("").reverse().join("");
};
/**
 * Entendendo o que está acontecendo acima
 * reverse não existe em String, então esse comportamento foi
 * adicionado. A string foi quebrada em array de caracteres, esse array
 * foi invertido e depois foi feito o join
 */

console.log("Uma string para testar".reverse());
/**
 * Teste do comportamento adicionado
 */

Array.prototype.first = function() {
    return this[0];
};

console.log([1, 2, 3, 4, 5].first());
console.log(["a", "b", "c"].first());

String.prototype.toString = function() {
    return "Lascou tudo";
};
/**
 * O perigo de se sobrescrever uma funcao nativa da linguagem é
 * que voce pode matar funcionalidades em todo o programa
 */

console.log("Meu seundo teste".reverse());