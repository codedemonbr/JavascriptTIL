const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

const contadorC = require('./instanciaNova')();
const contadorD = require('./instanciaNova')();

//compartilham a mesma referencia A e B
contadorA.inc();
contadorA.inc();
console.log(contadorA.valor, contadorB.valor);

//São objetos distintos porque são retornados atravez de uma factory
contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor);