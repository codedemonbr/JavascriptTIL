function gerarNumerosEntre(min, max, time) {
    if (min > max) {
        [max, min] = [min, max];
    }

    return new Promise((resolve) => {
        setTimeout(function () {
            const fator = max - min + 1;
            const aleatorio = parseInt(Math.random() * fator) + min;
            resolve(aleatorio);
        }, time);
    });
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 400),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 2000),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 150),
        gerarNumerosEntre(1, 60, 100),
    ]);
}

console.time("promise");
gerarVariosNumeros()
    .then((numeros) => console.log(numeros))
    .then(() => {
        console.timeEnd("promise");
    });
