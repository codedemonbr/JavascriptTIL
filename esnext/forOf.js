for (const letra of 'object') {
    console.log(letra);
}

const assuntosEcma = ['Map', 'Set', 'Promisse'];

for (const i in assuntosEcma) {
    console.log(i);
}

for (const assunto of assuntosEcma) {
    console.log(assunto);
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }],
]);

for (const assunto of assuntosMap) {
    console.log(assunto);
}

for (const chave of assuntosMap.keys()) {
    console.log(chave);
}

for (const valor of assuntosMap.values()) {
    console.log(valor);
}

for (const [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl);
}

const s = new Set(['a', 'b', 'c']);
for (const letra of s) {
    console.log(letra);
}