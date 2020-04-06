const vetor = [8, 5, 4, 6, 9, 2, 3, 7, 54, 1, 5, 6, 9, 3, 4, 78];
let par = 0;
let impar = 0;
vetor.forEach(element => {
    if (element % 2 == 0) {
        par++;
    }
});

impar = vetor.length - par;

console.log(`Impar = ${impar}`);
console.log(`Par = ${par}`);