const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "dados.txt");
const caminho2 = path.join(__dirname, "dados2.txt");

function exibirConteudo(_, conteudo) {
    console.log(conteudo.toString());
}

console.log("Inicio...");
fs.readFile(caminho, exibirConteudo);
console.log("Fim...");

console.log("Inicio Sync...");
const conteudo = fs.readFileSync(caminho2);
console.log(conteudo.toString());
console.log("Fim Sync...");
