function bissexto(ano) {
    let bissex = false
    if (ano % 4 == 0) {
        bissex = true;
        if (ano % 100 == 0) {
            bissex = false;
            if (ano % 400 == 0) {
                bissex = true
            }
        }
    }
    return bissex
}

console.log(`2020 = ${bissexto(2020)}`)
testaBissex(1499, 1520)
testaBissex(1599, 1610)
testaBissex(1988, 2020)

function testaBissex(inicio, fim) {
    let ini = parseInt(inicio)
    let fi = parseInt(fim)
    for (let i = ini; i < fi; i++) {
        console.log(`${i} =  ` + bissexto(i))
    }
}