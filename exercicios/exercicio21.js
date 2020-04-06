function calcPagPlanoSaude(idade) {
    let id = parseInt(idade)
    let pag = 100
    if (id >= 0 && id < 10) {
        pag += 80
    } else if (id >= 10 && id <= 30) {
        pag += 50
    } else if (id > 30 && id <= 60) {
        pag += 95
    } else if (id > 60) {
        pag += 130
    } else {
        return "deu merda"
    }
    return pag
}

function calcPlanTestDrive() {
    for (let index = 0; index < 120; index += 5) {
        console.log(index);
        console.log(calcPagPlanoSaude(index));
    }
}
calcPlanTestDrive()