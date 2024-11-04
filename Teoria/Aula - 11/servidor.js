var http = require('http');
var express = require('express');
var colors = require('colors');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const uri = `mongodb+srv://henrique:<cyOs7rd3jVT2PdTy>@cluster0.bs8hh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, { useNewUrlParser: true });

var server = http.createServer(app);
server.listen(80);

console.log('Servidor rodando ...'.rainbow);

app.post("/cadastrar_usuario", function(req, resp) {

    // salva dados no banco
    client.db("exemplo_bd").collection("usuarios").insertOne(
      { db_nome: req.body.nome, db_login: req.body.login, db_senha: req.body.senha }, function (err) {
      if (err) {
        resp.render('resposta_usuario', {resposta: "Erro ao cadastrar usuário!"})
      }else {
        resp.render('resposta_usuario', {resposta: "Usuário cadastrado com sucesso!"})       
      };
    });
 
 });

 app.post("/logar_usuario", function(req, resp) {

    // busca um usuário no banco de dados
    client.db("exemplo_bd").collection("usuarios").find(
      {db_login: req.body.login, db_senha: req.body.senha }).toArray(function(err, items) {
        console.log(items);
        if (items.length == 0) {
          resp.render('resposta_usuario', {resposta: "Usuário/senha não encontrado!"})
        }else if (err) {
          resp.render('resposta_usuario', {resposta: "Erro ao logar usuário!"})
        }else {
          resp.render('resposta_usuario', {resposta: "Usuário logado com sucesso!"})       
        };
      });
 
 });
 
 