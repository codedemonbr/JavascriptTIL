function decompoeTroco(valor) {
    let val = parseInt(valor)
    let cem = Math.trunc(val / 100)
    val = val % 100
    let cinquenta = Math.trunc(val / 50)
    val = val % 50
    let dez = Math.trunc(val / 10)
    val = val % 10
    let cinco = Math.trunc(val / 5)
    val = val % 5
    let um = Math.trunc(val / 1) //passsos desnecessários, carece testes; 
    val = val % 1
    console.log(cem + " notas de cem reais");
    console.log(cinquenta + " notas de cinquenta reais");
    console.log(dez + " notas de dez reais");
    console.log(cinco + " notas de cinco reais");
    console.log(um + " notas de um real");
}
decompoeTroco(128)
decompoeTroco(359)
decompoeTroco(166)