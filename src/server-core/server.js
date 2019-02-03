const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
var db = require('./config/db');

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, { useNewUrlParser: true }, (err, database) => {
    if (err) return console.log(err)

    db = database.db("set-free")
    require('./controllers')(app, db);

    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
});
