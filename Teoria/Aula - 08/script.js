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
    let tecla = event.key;
    console.log(tecla);
    let vel = 5;

    if(event.key == "ArrowLeft"){
        retangulo.x -= vel;
    }else if(event.key == "ArrowRight"){
        retangulo.x += vel;
    }else if(event.key == "ArrowUp"){
        retangulo.y -= vel;
    }else if(event.key == "ArrowDown"){
        retangulo.y += vel;
    }
});