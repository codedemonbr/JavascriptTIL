let mortosMundo = 18142136;
let mortosCorona = 181356;
let mortosSuicidio = 330777;
let mortosAlcool = 771495;
let mortosCigarro = 1542023;
let mortosTransito = 416396;
let mortosMalaria = 302571;
let mortosCancer = 2533453;
let mortosAids = 518562;
let mortosGripeComum = 150068;

function CalcPercMortes(doenca) {
    return (doenca / mortosMundo) * 100;
}

function CriarDados(causaMorte, quantidade)