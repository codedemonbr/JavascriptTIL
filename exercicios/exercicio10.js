function multiplo3(num) {
    let numAsInt = parseInt(num)
    if (numAsInt % 3 == 0) {
        return true
    }
    return false
}

console.log(multiplo3(3))
console.log(multiplo3("3"))
console.log(multiplo3(3, 0))
console.log(multiplo3("3.0"))
console.log(multiplo3("barata"))
console.log(multiplo3(7))
console.log(multiplo3(6))