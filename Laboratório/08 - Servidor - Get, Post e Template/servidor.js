var http = require('http');
var express = require('express');
var colors = require('colors');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log('Servidor rodando ...'.rainbow);

app.get('/', function (requisicao, resposta){
    resposta.redirect('project.html')
})

app.get('/cadastra', function(requisicao, resposta){
    let nome = requisicao.query.cadastra_nome;
    let senha = requisicao.query.cadastra_senha;
    console.log('Nome: ' + nome + ' Email: ' + email + ' Senha: ' + senha);

    resposta.redirect('sucesso.html');

});


app.post('/cadastra', function(requisicao, resposta){
    let nome = requisicao.body.cadastra_nome;
    let senha = requisicao.body.cadastra_senha;
    console.log('Nome: ' + nome + ' Senha: ' + senha);

    resposta.redirect('sucesso.html');

});

app.post('/login', function(requisicao, resposta){
    let nome = requisicao.body.login_login;
    let senha = requisicao.body.login_senha;
    console.log('Nome: ' + nome + ' Senha: ' + senha);

    
    if(nome == "123" && senha == "123"){
        resposta.render('resposta.ejs', {resposta: "sucesso", mensagem: "Login efetuado com sucesso"});
    }
    else{
        resposta.render('resposta.ejs', {resposta: "erro", mensagem: "Login ou senha incorretos"});
    }
});
