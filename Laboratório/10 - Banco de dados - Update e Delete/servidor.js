var http = require('http');
var express = require('express');
var colors = require('colors');
var bodyParser = require('body-parser');
var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const uri = "mongodb+srv://henrique:dTGkGgRqp6B19A7G@cluster0.bs8hh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, { useNewUrlParser: true });

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log('Servidor rodando ...'.rainbow);


// get p/ pagina principal
app.get('/', function (requisicao, resposta){
resposta.redirect('main.html')
})

app.get('carros', function (requisicao, resposta){
    resposta.render('carros.ejs')
})



app.post("/cadastrar_usuario", function(req, resp) {

    // salva dados no banco
    client.db("DataBase").collection("usuarios").insertOne(
      { db_nome: req.body.nome, 
        db_login: req.body.login, 
        db_senha: req.body.senha }, function (err) {
      if (err) {
        resp.render('resposta_usuario', {resposta: "Erro ao cadastrar usuário!"})
      }else {
        resp.render('resposta_usuario', {resposta: "Usuário cadastrado com sucesso!"})       
      };
    });
 
});


app.post("/logar_usuario", function(req, resp) {

    // busca um usuário no banco de dados
    client.db("DataBase").collection("usuarios").find(
      {db_login: req.body.login, db_senha: req.body.senha }).toArray(function(err, items) {
        if (items.length == 0) {
          resp.render('resposta_usuario', {resposta: "Usuário/senha não encontrado!"})
        }else if (err) {
          resp.render('resposta_usuario', {resposta: "Erro ao logar usuário!"})
        }else {
          resp.render('login', {items})       
        };
      });
 
});

app.get('/carros', function(req,resp){
  // busca um usuário no banco de dados
  client.db("DataBase").collection("carros").find(
      {}).toArray(function(err, items) {
          console.log(items);
          resp.render('carros.ejs',{items});
      });
    
  
});

app.get('/carros_login', function(req,resp){
  // busca um usuário no banco de dados
  client.db("DataBase").collection("carros").find(
      {}).toArray(function(err, items) {
          console.log(items);
          resp.render('carros_login.ejs',{items});
      });
});

app.post("/cadastrarCarro", function(req, resp) {

  // salva dados no banco
  client.db("DataBase").collection("carros").insertOne(
    { db_marca: req.body.marca, 
      db_modelo: req.body.modelo, 
      db_ano: req.body.ano,
      db_quantidade: parseInt(req.body.quantidade),}, function (err) {
    if (err) {
      resp.render('resposta_usuarioCarros', {resposta: "Erro ao cadastrar o carro!"})
    }else {
      resp.render('resposta_usuarioCarros', {resposta: "Carro cadastrado com sucesso!"})       
    };
  });

});

app.post("/atualizarCarro", function(req, resp) {

  // atualiza senha do usuário
  client.db("DataBase").collection("carros").updateOne(
      { db_marca: req.body.marca, db_ano: req.body.ano },
      { $set: {db_quantidade: parseInt(req.body.novaQtd)} }, function (err, result) {
        console.log(result);
        if (result.modifiedCount == 0) {
          resp.render('resposta_usuarioCarros', {resposta: "Marca/ano não encontrado!"})
        }else if (err) {
          resp.render('resposta_usuarioCarros', {resposta: "Erro ao atualizar a quantidade de carros!"})
        }else {
          resp.render('resposta_usuarioCarros', {resposta: "Quantidade de carros atualizadas com sucesso!"})       
        };
  });

});

app.post("/removerCarro", function(req, resp) {

  // remove do usuário
  client.db("DataBase").collection("carros").deleteOne(
    { db_marca: req.body.marca, db_modelo: req.body.modelo } , function (err, result) {
      console.log(result);
      if (result.deletedCount == 0) {
        resp.render('resposta_usuarioCarros', {resposta: "Marca/ano não encontrado!"})
      }else if (err) {
        resp.render('resposta_usuarioCarros', {resposta: "Erro ao remover o carro!"})
      }else {
        resp.render('resposta_usuarioCarros', {resposta: "Carro removido com sucesso!"})       
      };
    });

});

app.post("/comprarCarro", function(req, resp) {

  // atualiza senha do usuário
  client.db("DataBase").collection("carros").updateOne(
      { db_marca: req.body.marca, db_modelo: req.body.modelo, db_quantidade: { $gt: 0 } },
      { $inc: {db_quantidade: -1} }, function (err, result) {
        console.log(result);
        if (result.modifiedCount == 0) {
          resp.render('resposta_usuarioComprarCarros', {resposta: "Esgotado!"})
        }else if (err) {
          resp.render('resposta_usuarioComprarCarros', {resposta: "Erro ao comprar o carro!"})
        }else {
          resp.render('resposta_usuarioComprarCarros', {resposta: "Compra feita com sucesso!"})    
        };
  });

});