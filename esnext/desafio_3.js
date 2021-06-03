const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "dados.txt");

function exibirConteudo(caminho) {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, (_, data) => resolve(data.toString()));
    });
}

exibirConteudo(caminho)
    .then((counteudo) => counteudo.split("\n"))
    .then((linhas) => linhas.join(","))
    .then((conteudo) => `O valor final é: ${conteudo}`)
    .then(console.log);
