import { criarTabela } from './db';
//Dependências 
const express = require('express');
const db = require('./db');
const multer = require('multer');

const app = express();
const port = 3000;

// Inicial
app.get('/', (req, res) =>{
    res.send('Servidor On!');
});

//Upload de arquivos
app.post('/upload', (req, res) =>{
    res.send('Rota de upload criada!!!')

});

app.listen(port, () =>{
    console.log(`Servidor escutando a porta ${port}`);
});



criarTabela();