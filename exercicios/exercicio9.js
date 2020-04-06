const status = (nota) => {
    if (nota < 39) {
        return `reprovado com nota ${nota}`
    } else {
        if (5 - arredondamento(nota) < 3) {
            nota += 5 - arredondamento(nota)
        }
        return `aprovado com nota ${nota}`
    }
}

function arredondamento(nota) {
    let resto = nota % 5
    return resto
}

console.log(status(39))
console.log(status(38))
console.log(status(44))
console.log(status(43))
console.log(status(42))