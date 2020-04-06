function epidemia() {
    let anterior = 1
    let total = 0
    let ciclo = 0
    const populacao = 100 * Math.pow(10, 6)
    while (total < populacao) {
        //console.log(anterior);
        total = anterior + anterior * 2
            //console.log(total);
        anterior = total
        ciclo++
    }
    console.log(total);

    console.log(ciclo);

}

epidemia()