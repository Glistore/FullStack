//let entrada = prompt("coloque seu nome");
//window.alert(entrada);
//console.log(entrada);

console.log("exercicio 1")

for(let i=0;i<100;i++){
    if((i%2)!=0){
        console.log(i+"\n");
    }
}

console.log("exercicio 2")

for(let i=0;i<500;i++){
    if((i%5)==0){
        console.log(i+"\n");
    }
}

console.log("exercicio 3")

let numero = prompt("digita um numero ai");

while(numero>=0){
    console.log(numero+"\n");
    numero--;
}


console.log("exercicio 4")

let numero2 = prompt("digita um numero ai pra sair fatorial");
let aux = 1

while(numero2>0){
    
    aux = aux * numero2;
    numero2--;

}
console.log("viu:" +aux)

console.log("exercicio 5")