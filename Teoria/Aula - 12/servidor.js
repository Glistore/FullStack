require('colors');
console.log('Servidor iniciado'.rainbow);

var http = require('http');
var mongodb = require("mongodb");
var express = require('express');
const bodyParser = require('body-parser');

const MongoClient = mongodb.MongoClient;

const uri = "mongodb+srv://henrique:cyOs7rd3jVT2PdTy@cluster0.bs8hh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



var app = express();
const client = new MongoClient(uri, { useNewUrlParser: true });


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './views');




app.get('/cadastra', function(req, res){
    let nome = req.query.cadastra_nome;
    let senha = req.query.cadastra_senha;
    let login = req.query.cadastra_login
    let nasc = req.query.cadastra_nascimento

    client.db("Cluster0").collection("usuarios").insertOne(
        { db_nome: nome, db_login: login, db_senha: senha, db_nascimento: nasc }, function (err) {
        if (err) {
          res.render('resposta.ejs', {resposta: "erro", mensagem: "Erro ao cadastrar"});
        }else {
          res.render('resposta.ejs', {resposta: "sucesso", mensagem: "Cadastro foi"});
              
        };
      });
   
});




app.post('/login', function(req, res){
    let nome = req.body.login_login;
    let senha = req.body.login_senha;
    client.db("Cluster0").collection("usuarios").find(
        {db_login: nome, db_senha: senha }).toArray(function(err, items) {
          console.log(items);
          if (items.length == 0) {
            res.render('resposta.ejs', {resposta: "erro", mensagem: "Usuario não encontrado"});
          }else if (err) {
            res.render('resposta.ejs', {resposta: "erro", mensagem: "Erro ao logar"});
          }else {
            res.render('resposta.ejs', {resposta: "sucesso", mensagem: "Usuario Logado"});
          };
        });
   
});

app.get('/imprime', function(req, res){
   let qtd = req.query.qtd;

   res.render('imprime.ejs', {qtd: qtd});

});


app.post('/alterarSenha', function(req,resp){
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

});



var server = http.createServer(app);

server.listen(80);


console.log('Servidor rodando'.rainbow);