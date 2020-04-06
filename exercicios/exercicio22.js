function jurosComposto(taxa, capital, periodo) {
    let i = parseFloat(taxa)
    let c = parseFloat(capital)
    let n = parseInt(periodo)
    if (i != null && c != null && n != null) {
        return c * (1 + i) ** n
    } else {
        return "valor invalido"
    }

}

function anuidade(mes, valor) {
    if (mes > 0 && mes < 13) {
        const taxa = 5 / 100
        let montante = valor
        if (mes > 1) {
            montante = jurosComposto(taxa, valor, mes - 1).toFixed(2)
        }
        return montante
    } else {
        return "mes invalido"
    }
}

console.log(anuidade(1, 1000));
console.log(anuidade(4, 100));