const express = require("express");
const req = require("express/lib/request");
const app = express();
const bodyParser = require('body-parser');
const path = require("path");
const MongoClient = require('mongodb').MongoClient;

const uri = //uri mongodb igual o da aula passada

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "front")));


app.use(bodyParser.urlencoded({
    extended: true
}));

MongoClient.connect(uri, (err, client) => {
    if (err) return console.log(err)
    db = client.db('data-node');

    app.listen(3000, function () {
        console.log('Servidor rodando...')
    })
})


app.get("/", (req, res) => {
    res.render('../front/index.ejs');
})

app.post("/show", (req, res) => {
    db.collection('data').insertOne(req.body, (err, result) => {
        if (err) return console.log(err);
        console.log('Salvo com sucesso');
        res.redirect("/");
    })
})