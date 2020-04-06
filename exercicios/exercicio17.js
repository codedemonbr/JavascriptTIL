function aumento(plano, salario) {
    let sal = parseFloat(salario)
    switch (plano) {
        case "a":
            return (sal * 1.1).toFixed(2)
        case "b":
            return (sal * 1.15).toFixed(2)
        case "c":
            return (sal * 1.2).toFixed(2)
        default:
            return "plano invalido"
    }
}

console.log(aumento('a', 1000))
console.log(aumento('b', 1000))
console.log(aumento('c', 1000))
console.log(aumento('d', 1000))