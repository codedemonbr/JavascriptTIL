const vetor = [9, 8, 7, 9, 8, 6];

function MediaVetor() {
    let acumulador = 0;
    vetor.forEach(element => {
        acumulador += element;
    });
    return acumulador / vetor.length;
}

console.log(MediaVetor());