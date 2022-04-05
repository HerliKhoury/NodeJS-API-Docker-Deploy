const express = require('express');

const app = express();

app.get('/gondor', (req, res) => {
    res.status(200).send('Gondor calls for aid!');
    return;
});

app.listen({port:8080}, () => {
    console.log('Servidor rodando liso!');
});