//km 99 pop R$1,62
//km uber está igual
const precoMinimo = 5;
const taxaMinuto = 0; //uber 0.2
const taxaKm = 0.95; //uber1,26
const precoBase = 2;

//de casa até hospital geral de guarulhos
//886,5 pop 617km

function CalcViagem(distancia, tempo = 15) {
    let precoViagem = 2 + distancia * taxaKm + tempo * taxaMinuto;
    if (precoViagem < precoMinimo) {
        return precoMinimo;
    }
    return precoViagem;
}

console.log(CalcViagem(39.4, 52));
console.log(CalcViagem(4));
console.log(CalcViagem(4.4));
console.log(CalcViagem(10));