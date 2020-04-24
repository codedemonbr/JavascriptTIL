const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); //tira o ultimo elemento
console.log(pilotos);

pilotos.push("Verstappen"); // coloca no ultimo
console.log(pilotos);

pilotos.shift(); //remove o primeiro elemento
console.log(pilotos);

pilotos.unshift("Ham    ilton"); //adiciona no primeiro elemento
console.log(pilotos);

/**
 * Splice pode remover ou adicionar elementos dependendo
 * dos parametros passados
 *
 * Slice = fatia
 * splice = emenda
 */
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);

pilotos.splice(3, 1);
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); //retorna uma fatia do array
console.log(algunsPilotos1); //tudo a partir do indice 2

const algunsPilotos2 = pilotos.slice(1, 4); // tudo entre o indice 1 e 4
console.log(algunsPilotos2);