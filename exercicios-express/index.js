const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const saudacao = require('./requisicaoMid');
const usuarioApi = require('./api/usuario');
const produtoApi = require('./api/produto');
produtoApi(app, 'com param!');
app.post('/usuario', usuarioApi.salvar);
app.get('/usuario', usuarioApi.obter);

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(saudacao('Lucas'));
app.use((req, res, next) => {
    console.log('Antes...');
    next();
});



app.post('/corpo', (req, res) => {
    // let corpo = '';
    // req.on('data', function (parte) {
    //     corpo += parte;
    // });

    // req.on('end', function () {
    //     res.send(corpo);
    // });
    res.send(req.body.nome);
});

app.get('/opa', (req, res, next) => {
    res.json([
        {
            nome: 'Thiago',
            sobrenome: 'Santos',
            oasqueiro: true,
        },
        {
            nome: 'Maria',
            sobrenome: 'Silva',
            oasqueiro: false,
        },
    ]);
    console.log('Durante...');

    next();
});

app.use((req, res) => {
    console.log('Depois');
});

app.listen(3000, () => {
    console.log('Executando backend...');
});
