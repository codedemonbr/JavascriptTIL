//calcular fatorial de um numero
function fatorial(numero) {
    let fatorial = numero
    while (numero > 1) {
        fatorial = fatorial * (numero - 1)
        numero--
    }
    console.log(fatorial)
}

function fatorial2(numero) {
    let fatorial = numero
    if (numero == 0) {
        return 1
    } else {
        return numero * fatorial2(numero - 1)
    }

}
fatorial(5)
fatorial(4)
fatorial(6)

console.log(fatorial2(5))
console.log(fatorial2(4))
console.log(fatorial2(6))