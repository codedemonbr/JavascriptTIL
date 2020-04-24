//let e const
{
    var a = 2;
    let b = 3;
    console.log(b);
}
console.log(a);
/**
 * Let tem escopo de bloco
 *
 */

//template string
const produto = 'iPad';
console.log(`${produto} é caro, 
 e 
 é 
 mesmo!!!`);

//Destructuring
const [l, e, ...tras] = 'Meu Teste';
console.log(l);
console.log(e);
console.log(tras);

const [x, , y] = [1, 2, 3];
console.log(x, y);

const { idade: i, nome } = { nome: 'Ana', idade: 9 };
console.log(i, nome);