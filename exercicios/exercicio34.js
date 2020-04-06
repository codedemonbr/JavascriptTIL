function StringCompare(stringA, stringB) {
    let contido = true;
    for (let i = 0; i < stringA.length; i++) {
        let charA = stringA.charAt(i).toLowerCase();
        for (let j = 0; j < stringB.length; j++) {
            let charB = stringB.charAt(j).toLowerCase();
            if (charA == charB) {
                contido = true;
                break;
            } else {
                contido = false;
            }
        }
        if (!contido) {
            return contido;
        }
    }
    return contido;
}

console.log(StringCompare("batoDoce", "batataDoce"));
console.log(StringCompare("gato", "cachorro"));