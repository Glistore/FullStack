let canvas = document.getElementById("canvasFrame");
let ctx = canvas.getContext("2d");


let bola = {
    x: 100,
    y: 100,
    raio: 20,
    img: new Image(),
    desenha: function(){
        this.img.src = "pokebola.png";
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, this.raio*2, this.raio*2);
        ctx.closePath();
    }
    
}

function animacao(){
    ctx.clearRect(0 , 0, canvas.width, canvas.height);
    bola.desenha();
    requestAnimationFrame(animacao);
}

animacao();

document.addEventListener("mousemove", function(event){
    let rect = canvas.getBoundingClientRect();
    bola.x = event.clientX - rect.left - bola.raio;
    bola.y = event.clientY - rect.top - bola.raio;

    if (bola.x < 0){
        bola.x = 0
    }

    if (bola.y < 0){
        bola.y = 0
    }

    if (bola.x + bola.raio * 2 > canvas.width){
        bola.x = canvas.width - bola.raio * 2
    }
    
    if (bola.y + bola.raio * 2 > canvas.height){
        bola.y = canvas.height - bola.raio * 2
    }
});