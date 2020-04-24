console.log(this === global); //false
console.log(this === module); //false

console.log(this === module.exports); //true
console.log(this === exports); //true

function LogThis() {
    console.log('Dentro de uma função...');
    console.log(this === exports); //false
    console.log(this === module.exports); //false
    console.log(this === global); //true
}

LogThis();