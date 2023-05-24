const express = require('express');
const app = express();
const port = 3000;


app.get('/send-message', (req, res) => {
    res.send('Hola Mundo mundial!')
})

app.listen(port, () => {
    console.log (`La app de kafka se está ejecutando en http://localhost:${port}`)
})