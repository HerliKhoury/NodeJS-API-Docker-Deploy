const express = require('express');

const app = express();
app.use(express.json());//To say we're going to use json files

const dataList = [];

app.get('/data', (req, res) => {
    res.status(200).send(dataList);
    return;
});

app.listen({port:8080}, () => {
    console.log('Servidor rodando liso!');
});