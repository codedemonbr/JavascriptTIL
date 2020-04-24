const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');
const chines = (func) => func.pais == 'China';
const mulher = (func) => func.genero == 'F';
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual;
};
/**
 * Por padrão o reduce sempre manda o elemente anterior e o atual de um array
 * por esse motivo nao foi preciso passar parametros no menorSalario
 *
 */
axios.get(url).then((response) => {
    const funcionarios = response.data;

    console.log(funcionarios.filter(chines).filter(mulher).reduce(menorSalario));
});