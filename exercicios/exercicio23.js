function validaNota(nota) {
    let n = parseFloat(nota)
    if (n >= 0 && n <= 10) {
        return n
    } else {
        return "nota invalida" + n
    }
}

function calcMedia(codAluno, nota1, nota2, nota3) {
    let notasOrdenadas = new Array(validaNota(nota1), validaNota(nota2), validaNota(nota3))
    notasOrdenadas.sort()
    console.log(notasOrdenadas);

    const media = (notasOrdenadas[2] * 4 + notasOrdenadas[1] * 3 + notasOrdenadas[0] * 3) / 10
    console.log(media);

    if (media >= 5) {
        return `O aluno ${codAluno} foi aprovado com média ${media}`
    } else {
        return `O aluno ${codAluno} foi reprovado com média ${media}`
    }
}

console.log(calcMedia(001, 7, 5, 9));
console.log(calcMedia(20, 9, 3, 2));
console.log(calcMedia(30, 3, 2, 4));