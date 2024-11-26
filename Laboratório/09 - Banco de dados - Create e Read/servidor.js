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




app.get('/', function(req, res){
  res.redirect('Project.html');
});

app.get('/cadastra', function(req, res){
  let nome = req.query.cadastra_nome;
  let senha = req.query.cadastra_senha;
  console.log('Nome: ' + nome + ' Email: ' + emai + ' Senha: ' + senha);

  res.redirect('sucesso.html');

});


app.post('/cadastra', function(req, res){
  let nome = req.body.cadastra_nome;
  let senha = req.body.cadastra_senha;
  console.log('Nome: ' + nome + ' Senha: ' + senha);

  res.redirect('sucesso.html');

});

app.post('/login', function(req, res){
  let nome = req.body.login_login;
  let senha = req.body.login_senha;
  console.log('Nome: ' + nome + ' Senha: ' + senha);

  
  if(nome == "123" && senha == "123"){
      res.render('resposta.ejs', {resposta: "sucesso", mensagem: "Login efetuado com sucesso"});
  }
  else{
      res.render('resposta.ejs', {resposta: "erro", mensagem: "Login ou senha incorretos"});
  }
});

app.post('/criar_post', async (req, res) => {
  const newPost = {
      titulo: req.body.post_titulo,
      resumo: req.body.post_resumo,
      conteudo: req.body.post_conteudo,
  };
  client.db("Cluster0").collection("posts").insertOne(
      { db_titulo: newPost.titulo, db_resumo: newPost.resumo, db_conteudo: newPost.conteudo }, function (err) {
      if (err) {
        res.render('resposta_post.ejs', {resposta: "erro", mensagem: "Erro ao carregar post!"});
      }else {
        res.render('resposta_post.ejs', {resposta: "sucesso", mensagem: "Postado com sucesso!"});
            
      };
    });
});

app.get('/obter_posts', async (req, res) => {
  client.db("Cluster0").collection("posts").find({}).toArray(function(err, items) {
      if (err) {
          console.log(err);
          res.render('resposta.ejs', { resposta: "erro", mensagem: "Erro ao obter posts" });
      } else {
          console.log(items);
          res.render('blog.ejs', { posts: items });
      }
  });
});





var server = http.createServer(app);

server.listen(80);


console.log('Servidor rodando'.rainbow);