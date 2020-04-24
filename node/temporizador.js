const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function() {
    console.log('Executando tarefa 1!', new Date().getSeconds());
});

setTimeout(() => {
    tarefa1.cancel();
    console.log('Tarefa 1 cancelada');
}, 20000);

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)];
regra.hour = 01;
regra.second = 27;

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando tarefa 2!', new Date().getSeconds());
});