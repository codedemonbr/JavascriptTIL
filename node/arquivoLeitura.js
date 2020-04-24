const fs = require('fs');

const caminho = __dirname + '/arquivo.json';

/**
 * Modo sincrono
 */
const conteudo = fs.readFileSync(caminho, 'utf-8');
//console.log(conteudo);

/**
 * Modo Assincrono
 * Não recomendavel porque ocupa o event loop
 * como essa thread vai estar bloqueada,
 * haverá uma perda de performance
 */

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo); //não é necessario o parse para JSON
    //console.log(config);
    console.log(`${config.db.host}:${config.db.port}`);
});

/**
 * A forma abaixo é como ler arquivo JSON
 * sem o parse.
 * Preste atenção que é feito de maneira sincrona
 */
const config = require('./arquivo.json');
console.log(config);

/**
 * Lendo diretorio de forma assincrona
 */
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta');
    console.log(arquivos);
});