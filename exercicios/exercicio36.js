const vetor = [8, 9, 8, 7, 4, 5, 6, 1, 2, 3, 5, 9, 8, 5, 6, 4, 2, 1, 3, 64, 5];

function MultiplicaVetor(vetor, multiplicador) {
    let resultado = [];
    vetor.forEach(element => {
        resultado.push(element * multiplicador);
    });
    return resultado;
}

console.log(MultiplicaVetor(vetor, 2));