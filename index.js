// import express module
const express = require("express");

// import random word module
const randomWords = require('random-words');

// create express instance named "app"
const app = express();

// publish html pages in "web" folder
app.use(express.static('web'));

var wordList = [];

app.get('/', (req, res) => res.send("Hello"));

app.get('/api/rword/v1/getWord', (req, res) => {
    wordList = randomWords();
    res.send(wordList);
});

app.get('/api/rword/v1/getWord/:num', (req, res) => {
    wordList = randomWords(parseInt(req.params.num));
    res.send(wordList);
});

app.listen(3000, () => console.log("Listening on port 3000."));