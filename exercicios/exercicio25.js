function escreveNumeros(min, max) {
    let minimo = parseInt(min)
    let maximo = parseInt(max)
    for (let index = minimo; index <= maximo; index++) {
        console.log(index)
    }
}

escreveNumeros(1, 50)