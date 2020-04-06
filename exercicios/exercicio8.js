let pontos = "10 20 20 8 25 3 0 30 1"
let pontosArray = pontos.split(" ")

function batidaRecord(pontuacao) {
    let maior = 0;
    let recordes = 0;
    let menorPontuacao = 99999999;
    let indiceMenor = 0;
    pontosArray.forEach((element, indice) => {
        let eInt = parseInt(element)
        if (eInt > maior) {
            maior = eInt
            recordes++
        }
        if (eInt < menorPontuacao) {
            menorPontuacao = eInt
            indiceMenor = indice
        }
    });

    return [--recordes, ++indiceMenor]
}
const response = batidaRecord(pontosArray)
console.log(response)
console.log(pontosArray[6])