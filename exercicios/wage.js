/*
estagiario I
estagiario II
junior I $7 
junior II
pleno I
pleno II
pleno III
senior I
senior II
senior III
master


*/

const calcHoraEstag = sal => sal / (6 * 5 * 4.3);
const calcHoraProfissional = sal => sal / (8 * 5 * 4.3);

const estagiarioI = calcHoraEstag(1600);
const estagiarioII = calcHoraEstag(2000);
const juniorI = calcHoraProfissional(2600);
const juniorII = calcHoraProfissional(3000);
const juniorIII = calcHoraProfissional(3600);
const plenoI = calcHoraProfissional(4500);
const plenoII = calcHoraProfissional(5500);
const plenoIII = calcHoraProfissional(6000);
const seniorI = calcHoraProfissional(8000);
const seniorII = calcHoraProfissional(10000);
const seniorIII = calcHoraProfissional(12000);
const master = calcHoraProfissional(15000);

console.log(juniorI);

function CalcWageWeek(wageHour, workedHoursWeek = 40) {
    let wHour = parseFloat(wageHour);
    let wHWeek = parseInt(workedHoursWeek);
    return wHour * wHWeek;
}