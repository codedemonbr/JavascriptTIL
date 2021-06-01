const primeiroElemento = (arrayOuString) => arrayOuString[0];
const letraMinuscula = (letra) => letra.toLowerCase();

new Promise(function (resolve) {
    resolve(["Ana", "Bia", "Carol", "Diana"]);
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log);
