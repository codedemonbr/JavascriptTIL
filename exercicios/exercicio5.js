let a = 0.1
let b = 0.2
let c = a + b
let result = (x, y) => "R$" + (x + y).toFixed(2).toString().replace(".", ",")
console.log(c.toFixed(2).toString().replace(".", ","))
console.log(result(a, b))