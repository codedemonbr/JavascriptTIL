function falarDepoisDe(segundo, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase);
        }, segundo * 1000);
    });
}

falarDepoisDe(10, 'Que legal!')
    .then((frase) => frase.concat('?!?'))
    .then((outraFrase) => console.log(outraFrase))
    .catch((e) => console.log(e));
x;