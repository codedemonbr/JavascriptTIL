// setTimeout(function () {
//     console.log("Executando callback...");
//     setTimeout(function () {
//         console.log("Executando callback2...");
//         setTimeout(function () {
//             console.log("Executando callback3...");
//         }, 4000);
//     }, 30000);
// }, 2000);

function esperarPor(tempo = 10000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Execcutando promisse...");
            resolve("Vishhhhh...");
        }, tempo);
    });
}

// esperarPor(3000).then((texto) => console.log(texto));

esperarPor()
    .then(() => esperarPor)
    .then(() => esperarPor);
