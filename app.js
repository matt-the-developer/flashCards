const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/cards', (req, res) => {
    res.render('card', {
        prompt: "Who got shot giving a speech?",
    });
});

app.get('/hello', (req, res) => {
    res.render('hello')
});

app.post('/hello', (req, res) => {
    res.render('hello')
});

app.listen(3000, () => {
    console.log("Live on 3000")
});