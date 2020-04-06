function diaUtil(dia) {
    let response = ""
    switch (dia) {
        case 1:
        case 7:
            response = "Dia de folga"
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            response = "dia util"
            break;
        default:
            response = "dia invalido"
            break;
    }
    return response
}

//função recebe um numero qualquer e converter para um dos 7 sete dias da semana
function diaSemana(dia) {
    let semanaDia = parseInt(dia % 7)
    if (semanaDia == 0) {
        semanaDia = 7
    }
    return diaUtil(semanaDia)
}

console.log(diaSemana(30))
console.log(diaSemana(15))
console.log(diaSemana(6))