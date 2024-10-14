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

//let x = parseInt(prompt("insira o primeiro valor"));
//let y = parseInt(prompt("insira o segundo valor"));
//document.getElementById("resp").innerHTML = soma(x, y);

function mult(a, b){
    let c = a * b;
    return c;
}

function ex2(){
    let numero = document.getElementById("i1").value;
    document.getElementById("r2").innerHTML = mult(numero, 3);
}

function ex3(){
    let numero1 = parseInt(document.getElementById("ex3_num1").value);
    let numero2 = parseInt(document.getElementById("ex3_num2").value);
    document.getElementById("r3").innerHTML = soma(numero1, numero2);
}

function ex4(){
    let numero1 = parseInt(document.getElementById("ex4_num1").value);
    let numero2 = parseInt(document.getElementById("ex4_num2").value);

    if(numero1 < 0 || numero2 < 0){
        document.getElementById("r4").innerHTML = soma(numero1, numero2);
    }else{
        document.getElementById("r4").innerHTML = mult(numero1, numero2);
    }
}

function random(){
    let x = Math.floor(Math.random()*11);
    document.getElementById("r5").innerHTML = x;
}


