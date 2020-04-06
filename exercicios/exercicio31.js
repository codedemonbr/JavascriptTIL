const vetor = [-1, 9, 9, 8, 4, 5, 21, 2, 3, 8, -7, -4, 1, -5, 6, 3, 2, 8, -8];

function ContaNegativos() {
    let contador = 0;
    vetor.forEach(element => {
        if (element < 0) {
            contador++;
        }
    });
    return contador;
}

console.log(ContaNegativos());