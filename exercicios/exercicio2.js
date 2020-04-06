function tipoTriangulo(a, b, c) {
    if (a == b && b == c) {
        return "equilatero"
    } else if (a == b || b == c || a == c) {
        return "isoceles"
    } else {
        return "escaleno"
    }
}

console.log(tipoTriangulo(3, 5, 9))
console.log(tipoTriangulo(3, 3, 4))
console.log(tipoTriangulo(6, 6, 6))