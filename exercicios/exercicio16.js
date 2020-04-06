function operacao(a, op, b) {
    if (typeof(op) === 'string') {
        let x = parseInt(a)
        let y = parseInt(b)
        switch (op) {
            case "+":
                return x + y
            case "-":
                return x - y
            case "*":
                return x * y
            case "/":
                return x / y
            default:
                return "Operação não prevista"
                break;
        }
    } else {
        return "Operação invalida"
    }
}

let teste = operacao(2, "+", 3)
console.log(teste);
teste = operacao(2, "-", 3)
console.log(teste);
teste = operacao(2, "*", 3)
console.log(teste);
teste = operacao(2, "/", 3)
console.log(teste);
teste = operacao(2, "batata", 3)
console.log(teste);
teste = operacao(2, true, 3)
console.log(teste);