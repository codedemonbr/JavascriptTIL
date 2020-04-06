function jurosCompostos(capitalInicial, taxa, tempo) {
    //s = p(1+i)^n
    return capitalInicial * (1 + taxa) ** tempo

}

function jurosSimples(capitalInicial, taxa, tempo) {
    //F = P.(1 + i.n) 
    return capitalInicial * (1 + taxa * tempo)
}

let capitalInicial = 1000
let taxa = (5 / 12) / 100
let tempo = 12
console.log(`Capital inicial ${capitalInicial}`)
console.log(`Taxa ${(taxa*100).toFixed(2)}%`)
console.log(`Tempo ${tempo}`)
console.log(`Montante em juros composto R$${jurosCompostos(capitalInicial, taxa, tempo).toFixed
(2)}`)
console.log(`Montante em juros simples R$${jurosSimples(capitalInicial, taxa, tempo).toFixed(2)}`)