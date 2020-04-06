const vetor = [];
let intervalo = 0;

function GeraNumeros() {
    return Math.floor(Math.random() * 30);
}

for (let index = 0; index < 10; index++) {
    vetor.push(GeraNumeros());
}

function ContaIntervalo() {
    vetor.forEach(element => {
        if (element >= 10 && element <= 20) {
            intervalo++;
        }
    });
}
ContaIntervalo();
console.log(vetor);
console.log(intervalo);