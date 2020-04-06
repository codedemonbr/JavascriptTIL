let vetorPilha = [1, 2, 3, 4, 5];
const vetorAdiciona = [6, 7, 8, 9, 10];

function Adiciona(vetorInicial, vetorAdicionar) {
    vetorAdicionar.forEach(element => {
        vetorInicial.push(element);
    });
    console.log(vetorInicial);
}
Adiciona(vetorPilha, vetorAdiciona);