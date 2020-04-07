const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b;
    },
};
console.log(JSON.stringify(obj));
/**
 * Esta função stringify converte um objeto para Json
 * o detalhe fica para as funções membros que não são convertidas
 */

console.log(
    JSON.parse(
        '{"code":"USD","codein":"BRL","name":"Dólar Comercial","high":"5.2862","low":"5.2816","varBid":"-0.0001","pctChange":"0","bid":"5.2859","ask":"5.2865","timestamp":"1586206804","create_date":"2020-04-06 21:00:02"}'
    )
);
/**
 * JSON parse converte para objeto js. Muito cuidado apenas para que seja um JSON valido
 */