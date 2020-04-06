function delta(a, b, c) {
    return (b ** 2) - (4 * a * c)
}

function calculaBhaskara(a, b, c) {
    //-b +- Vdelta/2a
    let solution = []
    if (delta(a, b, c) >= 0) {
        solution.push((-b + Math.sqrt(delta(a, b, c))) / 2 * a)
        solution.push((-b - Math.sqrt(delta(a, b, c))) / 2 * a)
    } else {
        return "Delta é negativo"
    }
    return solution
}

console.log(calculaBhaskara(1, 3, 2))
console.log(calculaBhaskara(3, 1, 2))