/*
 *Qp = Qd * Td/Tp
 *T = teor
 *Q = quantidade
 *d = desejada
 *p = partida
 *valores em gramas e %
 *ex.: QP = Qd * Td/Tp = 100g * 70% / 92,8% = 75,4g de alcool
 */

function calculaAlcool70(quantidadeDesejada, teorDesejado, teorPartida) {
    let qd = parseFloat(quantidadeDesejada)
    let td = parseFloat(teorDesejado)
    let tp = parseFloat(teorPartida)
    let qp = qd * td / tp
    return qp
}
/*
 *Etanol de posto
 *max = 95,4%
 *min = 92,5%
 */

const etanolInterpolado = (max, min) => {
    return min + (max - min) / 2
}

console.log(etanolInterpolado(95.4, 92.5));
console.log(calculaAlcool70(100, 70, etanolInterpolado(95.4, 92.5)));
console.log(calculaAlcool70(200, 70, etanolInterpolado(95.4, 92.5)));
console.log(calculaAlcool70(500, 70, etanolInterpolado(95.4, 92.5)));
console.log(calculaAlcool70(100, 70, 92.8));