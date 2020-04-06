function temFrutas(fruta) {
    switch (fruta) {
        case "kiwi":
            console.log("Estamos comescassez de kiwis")
            break;
        case "maça":
            console.log("Não vendemos esta fruta aqui")
            break;
        case "melancia":
            console.log("Aqui está, são 3 reais o quilo")
            break;
        default:
            console.log("Fruta não cadastrada")
            break;
    }
}

temFrutas("kiwi")
temFrutas("banana")
temFrutas("maça")
temFrutas("melancia")