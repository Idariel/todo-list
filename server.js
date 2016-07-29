var http = require('http');
// var url = require('url');
var express = require('express');
var session = require('cookie-session');
var bodyParser = require('body-parser');

var app = express();

var todolist = function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.render('todolist.ejs');
};

app.get('/', todolist);




app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/html');
    res.send(404, '<h1><center>Erreur 404 : Page introuvable !</center></h1>');
});

app.listen(8000);
