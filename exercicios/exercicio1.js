const resultado = function(a, b, op) {
    switch (op) {
        case "soma":
            return a + b;
            break;
        case "sub":
            return a - b;
            break;
        case "mult":
            return a * b;
            break;
        case "div":
            return a / b;
            break;
        default:
            console.log("Passe os parametros corretamente");
            break;
    }
}

let meuTeste = (a, b) => console.log(a + b, a - b, a * b, a / b);

console.log("Soma");
console.log(resultado(3, 5, "soma"));
console.log("Subtração");
console.log(resultado(3, 5, "sub"));
console.log("Multiplicação");
console.log(resultado(3, 5, "mult"));
console.log("Divisão");
console.log(resultado(3, 5, "div"));
meuTeste(5, 3);