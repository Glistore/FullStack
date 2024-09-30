//let nome = prompt("insira seu nome");
//let idade = parseInt(prompt("insira a sua idade"));
//let ano_atual = 2024;

//let ano_nascimento = ano_atual - idade;

//let resposta = "olá, " + nome + ". O seu ano de nascimento é: " + ano_nascimento;

//document.getElementById("resp").innerHTML = resposta;

function soma(a, b){
    let c = a + b;
    return c;
}

let x = parseInt(prompt("insira o primeiro valor"));
let y = parseInt(prompt("insira o segundo valor"));
document.getElementById("resp").innerHTML = soma(x, y);

function mult(a, b){
    let c = a * b;
    return c;
}

function ex2(){
    let numero = document.getElementById("i1").value;
    document.getElementById("r2").innerHTML = mult(numero, 3);

}

