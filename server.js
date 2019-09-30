const express = require('express');
const bodyParser = require('body-parser');
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const mongoose = require('mongoose');
require('./routes.js')(server);

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://trabalhog2:trabalhog2@cluster0-aozv0.mongodb.net/trabalhog2?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

server.get('/', (req, res) => {
    res.json({"message": "Orientação a obejtos 1"});
});
server.listen(3000)


