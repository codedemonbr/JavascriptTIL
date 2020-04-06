function calcTotal(codigo, quantidade) {
    let cod = parseInt(codigo)
    let qtd = parseInt(quantidade)
    switch (cod) {
        case 100:
            //cachorro quente 
            return qtd * 3
        case 200:
            //Hamburguer
            return qtd * 4
        case 300:
            //Cheeseburguer
            return qtd * 5.5
        case 400:
            //Bauru
            return qtd * 7.5
        case 500:
            //Refrigerante
            return qtd * 3.5
        case 600:
            //Suco
            return qtd * 2.8

        default:
            return "produto não existe"
    }
}

console.log(calcTotal(100, 2));
console.log(calcTotal(200, 3));
console.log(calcTotal(300, 5));
console.log(calcTotal(400, 1));
console.log(calcTotal(500, 7));
console.log(calcTotal(600, 5));
console.log(calcTotal(700, 2));