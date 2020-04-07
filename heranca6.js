function Aula(nome, videoID) {
    this.nome = nome;
    this.videoID = videoID;
}

const aula1 = new Aula("Bem vindo", 123);
const aula2 = new Aula("Até Breve", 456);
console.log(aula1, aula2);
/**
 *
 * @param {*} f
 * @param  {...any} params
 * o parametro f vai receber uma função
 * o restante vai no array params
 * Aqui o que ela simula nada mais é do que o operador
 * new faz.
 *  - cria um objeto vazio
 *  - o prototipo do objeto recebe o recebe o parametro prototype da funcao modelo
 *  - o apply é usado para que os parametros seja iniciados no objeto
 *  - por fim ele é passado pelo return
 */
function novo(f, ...params) {
    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, params);
    return obj;
}
/**
 * Não acho que isso vá servir no dia a dia,
 * mas o conceito está passado
 */
const aula3 = novo(Aula, "Bem Vindo", 123);
const aula4 = novo(Aula, "Até Breve", 456);
console.log(aula3, aula4);