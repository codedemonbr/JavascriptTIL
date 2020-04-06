const vetor = [7, 8, 5, 9, 56, 8, 7, 5, 5, 9, 2, 1, 0, , 9, 87, 5, 6, 1];

function MaiorMenor() {
    let maior = vetor[0];
    let menor = vetor[0];
    vetor.forEach(element => {
        if (element > maior) {
            maior = element;
        }
        if (element < menor) {
            menor = element;
        }
    });
    console.log(`menor ${menor}`);
    console.log(`maior ${maior}`);
}
MaiorMenor();