let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");
let canvas2=document.getElementById("canvas2");
let ctx2=canvas2.getContext("2d");

function quadrado_pequeno(x, y, cor){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.fillRect(x,y,30,30);
    ctx.closePath();
}

function quadrado_grande(x, y, cor){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.fillRect(x,y,45,45);
    ctx.closePath();
}

function quadrado_medio(x, y, cor){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.fillRect(x,y,35,35);
    ctx.closePath();
}

function linha(x1, y1, x2, y2, cor){
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = cor;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
}

function arco(x1, y1, r, ang1, ang2, cor1 ,cor2){
    ctx.beginPath();
    ctx.lineWidth = 1.25;
    ctx.strokeStyle = cor1;
    ctx.fillStyle = cor2;
    ctx.arc(x1,y1,r,ang1,ang2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

}

function texto(x, y, texto){
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText(texto,x,y);
    ctx.closePath();

}

quadrado_grande(0, 0, "blue");
quadrado_grande(255, 0, "red");

linha(40, 40, 150, 150, "blue");
linha(260, 40, 150, 150, "red");

quadrado_pequeno(0, 120, "cyan");
quadrado_pequeno(0, 150, "cyan");
quadrado_pequeno(270, 135, "cyan");

quadrado_medio(115, 150, "red")

linha(0, 150, 300, 150, "green");
linha(150, 260, 150, 150, "black")

quadrado_pequeno(0, 240, "yellow");
quadrado_pequeno(0, 270, "yellow");
quadrado_pequeno(30, 270, "yellow");

quadrado_pequeno(270, 240, "black");
quadrado_pequeno(270, 270, "black");
quadrado_pequeno(240, 270, "black");

arco(150, 300, 40, Math.PI, 0, "green", "cyan")
arco(150, 300, 80, Math.PI, 1.5*Math.PI, "green", "transparent")
arco(150, 300, 60, 1.5*Math.PI, 0, "green", "transparent")

arco(75, 225, 15, 0, 2.5*Math.PI, "green", "yellow")
arco(225, 225, 15, 0, 2.5*Math.PI, "green", "yellow")

arco(150, 120, 15, 0, 2*Math.PI, "blue", "cyan")

arco(150, 150, 80, Math.PI, 1.25*Math.PI, "green", "transparent")
arco(150, 150, 80, 1.75*Math.PI, 0, "green", "transparent")
arco(150, 150, 60, Math.PI, 0, "green", "transparent")

texto (110, 45, "Canvas")



//Casa



