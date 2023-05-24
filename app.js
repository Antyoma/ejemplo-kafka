const express = require('express');
const { writeUserDataTokafka, readMessages } = require('./user.kafka');

const app = express();
const port = 3000;


readMessages();

app.get('/send-message', async (req, res) => {
  await writeUserDataTokafka({ email: 'example', isNew: false, message: null })
    
    res.send('Hola Mundo mundial!')
})

app.listen(port, () => {
    console.log (`La app de kafka se está ejecutando en http://localhost:${port}`)
})