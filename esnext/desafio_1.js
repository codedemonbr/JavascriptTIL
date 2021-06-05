function somar(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

const somarAB = somar(3)(4);
console.log(somarAB(13));
console.log(somar(13)(20)(30));

function calcular(x) {
    return function (y) {
        return function (op) {
            return eval(`${x}${op}${y}`);
        };
    };
}

console.log(calcular(3)(7)("+"));

console.log(calcular(3)(7)("-"));

console.log(calcular(3)(7)("*"));

console.log(calcular(3)(7)("/"));

const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;
const somar2 = (a, b) => a + b;
const subtrair = (a, b) => a - b;

function calcular2(x) {
    return function (y) {
        return function (fn) {
            return fn(x, y);
        };
    };
}

console.log(calcular2(3)(7)(multiplicar));
console.log(calcular2(3)(7)(dividir));
console.log(calcular2(3)(7)(somar2));
console.log(calcular2(3)(7)(subtrair));

const calcular3 = (x) => (y) => (fn) => fn(x, y);
console.log(calcular3(3)(7)(multiplicar));
console.log(calcular3(3)(7)(dividir));
console.log(calcular3(3)(7)(somar2));
console.log(calcular3(3)(7)(subtrair));
