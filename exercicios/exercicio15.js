function escolheCarro(veiculo) {
    switch (veiculo) {
        case "hatch":
            return "compra efetuada com sucesso"
        case "sedans":
        case "motocicleta":
        case "caminhonete":
            return "Tem certezaque não prefere este modelo?"
        default:
            return "Não trabalhamos com este tipo de automóvel aqui"
    }
}

console.log(escolheCarro("hatch"))
console.log(escolheCarro("sedans"))
console.log(escolheCarro("motocicleta"))
console.log(escolheCarro("caminhonete"))
console.log(escolheCarro("barco"))