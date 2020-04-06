const manutencaoKm = 1800 / 30000;
const gasolinaKm = 4.5 / 25;
const horasTrabalhadas = 8;
const distanciaHorasMedia = 35;
const diasTrabalhados = 5 * 4.3;
const custoFinanciamento = 470; //mensal

const kmMensal = diasTrabalhados * distanciaHorasMedia * horasTrabalhadas;

function FinanciamentoKm() {
    return custoFinanciamento / kmMensal;
}

function CustoKm() {
    //retorna custo total por km
    return manutencaoKm + gasolinaKm + FinanciamentoKm();
}
console.log(manutencaoKm);
console.log(gasolinaKm);
console.log(kmMensal);
console.log(FinanciamentoKm());
console.log(CustoKm());
console.log(CustoKm() * kmMensal);