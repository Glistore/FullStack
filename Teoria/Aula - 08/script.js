let canvas = document.getElementById("canvasFrame");
let ctx = canvas.getContext("2d");

let retangulo = {
    x:10,
    y:10,
    largura:50,
    altura:50,
    cor_linha: "green",
    cor_preenchimento: "blue",
    desenha: function(){
        ctx.beginPath();
        ctx.strokeStyle = this.cor_linha;
        ctx.fillStyle = this.cor_preenchimento;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.strokeRect(this.x, this.y, this.largura, this.altura);
        ctx.closePath();
    }

}

let retangulo2 = {
    x:100,
    y:100,
    largura:50,
    altura:50,
    cor_linha: "red",
    cor_preenchimento: "yellow",
    desenha: function(){
        ctx.beginPath();
        ctx.strokeStyle = this.cor_linha;
        ctx.fillStyle = this.cor_preenchimento;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.strokeRect(this.x, this.y, this.largura, this.altura);
        ctx.closePath();
    }
}

let bola = {
    x: 100,
    y: 100,
    raio: 20,
    img: new Image(),
    desenha: function(){
        this.img.src = "bola.jpg";
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, this.raio*2, this.raio*2);
        ctx.closePath();
    }
    
}

function animacao(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    
    retangulo.desenha();
    retangulo2.desenha();
    requestAnimationFrame(animacao);
}

retangulo.desenha();
retangulo2.desenha();

animacao();

document.addEventListener("keydown", function(event){
    if(event.key == "ArrowLeft")
        retangulo.x -= 20;
    if(event.key == "ArrowRight")
        retangulo.x += 20;
    if(event.key == "ArrowUp")
        retangulo.y -= 20;
    if(event.key == "ArrowDown")
        retangulo.y += 20;
    }
);


// document.addEventListener("mousemove", function(event){
//     let rect = canvas.getBoundingClientRect();
//     retangulo2.x = event.clientX - rect.left;
//     retangulo2.y = event.clientY - rect.top;
// }
// );

document.addEventListener("mousemove", function(event){
    let rect = canvas.getBoundingClientRect();
    bola.x = event.clientX - rect.left - bola.raio;
    bola.y = event.clientY - rect.top - bola.raio;
}
);