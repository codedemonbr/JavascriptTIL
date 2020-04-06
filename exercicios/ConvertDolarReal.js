//https://docs.awesomeapi.com.br/api-de-moedas
function CompensadorErro(valor) {
    let val = parseFloat(valor + 0.01)
    return val
}

function RealDolar(cotacao, valorReal) {
    let cot = parseFloat(cotacao)
    let val = parseFloat(valorReal)
    return CompensadorErro(val / cot)
}

function DolarReal(cotacao, valorDolar) {
    let cot = parseFloat(cotacao)
    let val = parseFloat(valorDolar)
    return CompensadorErro(val * cot)
}

function CalcIOF(valorDolar, iof = 6.38) {
    let imposto = parseFloat(iof) / 100
    let val = parseFloat(valorDolar)
    return CompensadorErro(val * imposto)
}

function TaxaConsorcio(valorParcela, taxaMan = 4) {
    let man = parseFloat(taxaMan) / 100
    let val = parseFloat(valorParcela)
    return CompensadorErro(val * man)
}

function SeguroInadimplencia(valorParcela, taxaSeg = 2) {
    let taxa = parseFloat(taxaSeg) / 100
    let val = parseFloat(valorParcela)
    return CompensadorErro(val * taxa)
}

function DivideParcela(valorButoDolar, nParcelas = 24) {
    let val = parseFloat(valorButoDolar)
    let n = parseInt(nParcelas)
    return CompensadorErro(val / n)
}

function CalulaParcelaDolar(valor) {
    let val = parseFloat(valor)
    let parcela = DivideParcela(val)
    let iof = CalcIOF(parcela)
    let seguro = SeguroInadimplencia(parcela, 2.5)
    let taxaMan = TaxaConsorcio(parcela, 5)
    let parcelaTotal = parcela + iof + seguro + taxaMan
    console.log(`Para o valor de US$ ${val}`);
    console.log(`Valor base US$ ${parcela}`);
    console.log(`IOF US$ ${iof}`);
    console.log(`Taxa de manutenção US$ ${taxaMan}`);
    console.log(`Seguro Inadimplencia US$ ${seguro}`);

    console.log(`Parcela Total US$ ${parcelaTotal}`);
    console.log(`Parcela total em R$ ${DolarReal(5.46, parcelaTotal)}`);

}

// console.log("Real para dolar " + RealDolar(5.3, 10000));
// console.log("Dolar para real " + DolarReal(5.3, 100))

// console.log("Calculo IOF " + CalcIOF(100));
// console.log("Calculo IOF " + CalcIOF(1000));

// console.log("taxa consorcio " + TaxaConsorcio(1500, 3.5));
// console.log("seguro inadimplencia " + SeguroInadimplencia(100, 2));

// console.log("Divide parcelas " + DivideParcela(1000));
const parcelinha = DivideParcela(500, 24)
const teste = Math.round10(parcelinha, -2)
console.log(`Divide em parcelas arredondadas US$${teste}`);



CalulaParcelaDolar(500)