function encontraPares(min, max) {
    let minimo = parseInt(min)
    let maximo = parseInt(max)
    let pares = []
    for (let index = minimo; index <= maximo; index++) {
        if (index % 2 == 0) {
            pares.push(index)
        }
    }
    return pares
}

console.log(encontraPares(1, 100));