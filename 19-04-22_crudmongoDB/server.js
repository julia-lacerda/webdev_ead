const express = require("express");
const req = require("express/lib/request");
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://julia-lacerda:AOL147491m@cluster0.1wyrg.mongodb.net/data-node?retryWrites=true&w=majority"

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

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index.ejs');
})

app.post("/show", (req, res) => {
    db.collection('data').insertOne(req.body, (err, result) => {
        if (err) return console.log(err);
        console.log('Salvo com sucesso')
        res.redirect("/")
    })

})