Array.prototype.forEach2 = function(callback) {
    for (let index = 0; index < this.length; index++) {
        callback(this[index], index, this);
    }
};

const aprovados = ["Jose", "Daniel", "Clover", "Claudia"];

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`);
});