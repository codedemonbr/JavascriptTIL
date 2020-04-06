function crescimento(h1, taxa1, h2, taxa2) {
    //y = ax + b
    let diffH
    let diffCres
    let anos
    if (h1 > h2) {
        console.log(`A primeira criança é maior que a segunda`);
        diffH = h1 - h2
        if (taxa2 > taxa1) {
            console.log(`A segunda criança irá ultrapassar a primeira`);
            diffCres = taxa2 - taxa1
            anos = diffH / diffCres
            console.log(`Em ${anos}`);
        } else {
            console.log(`Não irá ultrapassar`);
        }
    } else if (h1 == h2) {
        console.log(`As crianças tem a mesma altura`);
        if (taxa1 > taxa2) {
            console.log("A Primeira criança cresce mais rapido e logo vai ser maior")
        } else if (taxa2 > taxa1) {
            console.log("A segunda criança vai passar primeira logo");
        } else {
            console.log("As crianças vão crescer juntas");
        }
    } else {
        console.log(`A primeira criança é menor que a segunda`);
        diffH = h2 - h1
        console.log(`Com diferença de ${diffH} altura`);
        if (taxa1 > taxa2) {
            console.log(`A primeira criança irá ultrapassar a segunda`);
            diffCres = taxa1 - taxa2
            anos = diffH / diffCres
            console.log(`Em ${anos}`);
        } else if (taxa1 == taxa2) {
            console.log("As crianças vão crescer com a mesma taxa, logo não ultrapassará");
        } else {
            console.log("A segunda criança vai aumentar a diferença com o tempo");
        }
    }
}

crescimento(120, 5, 130, 15)
crescimento(130, 5, 120, 15)
crescimento(120, 5, 120, 5)
crescimento(130, 10, 135, 5)