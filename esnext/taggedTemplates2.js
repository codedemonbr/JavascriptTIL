function real(partes, ...valores) {
    const resultado = [];
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`;
        resultado.push(partes[indice], valor); //criando um unico array concatenando partes
    });
    console.log(partes, valores);
    console.log(resultado);

    return resultado.join(''); //Join junta todas as  partes do array em uma unica string
}

const preco = 29.99;
const precoParcela = 11;
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`);