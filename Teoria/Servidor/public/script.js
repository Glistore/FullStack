let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");
let canvas2=document.getElementById("canvas2");
let ctx2=canvas2.getContext("2d");

function retangulo(x, y, tam_x, tam_y, cor, canvas){
    canvas.beginPath();
    canvas.lineWidth = 0;
    canvas.strokeStyle = 'transparent';
    canvas.fillStyle = cor;
    canvas.strokeRect(x,y,tam_x,tam_y);
    canvas.fillRect(x,y,tam_x,tam_y);
    canvas.closePath();
}

function linha(x1, y1, x2, y2, cor, canvas){
    canvas.beginPath();
    canvas.lineWidth = 1;
    canvas.strokeStyle = cor;
    canvas.moveTo(x1,y1);
    canvas.lineTo(x2,y2);
    canvas.stroke();
    canvas.closePath();
}

function arco(x1, y1, r, ang1, ang2, cor1 ,cor2, canvas){
    canvas.beginPath();
    canvas.lineWidth = 1.25;
    canvas.strokeStyle = cor1;
    canvas.fillStyle = cor2;
    canvas.arc(x1,y1,r,ang1,ang2);
    canvas.fill();
    canvas.stroke();
    canvas.closePath();

}

function texto(x, y, texto, canvas){
    canvas.beginPath();
    canvas.lineWidth = 10;
    canvas.fillStyle = "black";
    canvas.font = "20px Arial";
    canvas.fillText(texto,x,y);
    canvas.closePath();

}

function triangulo(x1, y1, x2, y2, x3, y3, cor_int, cor_ext, canvas){
    canvas.beginPath();
    canvas.lineWidth = 2;
    canvas.strokeStyle = cor_ext;
    canvas.fillStyle = cor_int;
    canvas.moveTo(x1,y1);
    canvas.lineTo(x2,y2);
    canvas.lineTo(x3,y3);
    canvas.lineTo(x1,y1);
    canvas.fill();
    canvas.stroke();
    canvas.closePath();
    }

retangulo(0, 0, 45, 45, "blue", ctx);
retangulo(255, 0, 45, 45, "red", ctx);

linha(40, 40, 150, 150, "blue", ctx);
linha(260, 40, 150, 150, "red", ctx);

retangulo(0, 120, 30, 30, "cyan", ctx);
retangulo(0, 150, 30, 30, "cyan", ctx);
retangulo(270, 135, 30, 30, "cyan", ctx);

retangulo(115, 150, 35, 35, "red", ctx)

linha(0, 150, 300, 150, "green", ctx);
linha(150, 260, 150, 150, "black", ctx)

retangulo(0, 240, 30, 30, "yellow", ctx);
retangulo(0, 270, 30, 30, "yellow", ctx);
retangulo(30, 270, 30, 30, "yellow", ctx);

retangulo(270, 240, 30, 30, "black", ctx);
retangulo(270, 270, 30, 30, "black", ctx);
retangulo(240, 270, 30, 30, "black", ctx);

arco(150, 300, 40, Math.PI, 0, "green", "cyan", ctx)
arco(150, 300, 80, Math.PI, 1.5*Math.PI, "green", "transparent", ctx)
arco(150, 300, 60, 1.5*Math.PI, 0, "green", "transparent", ctx)

arco(75, 225, 15, 0, 2.5*Math.PI, "green", "yellow", ctx)
arco(225, 225, 15, 0, 2.5*Math.PI, "green", "yellow", ctx)

arco(150, 120, 15, 0, 2*Math.PI, "blue", "cyan", ctx)

arco(150, 150, 80, Math.PI, 1.25*Math.PI, "green", "transparent", ctx)
arco(150, 150, 80, 1.75*Math.PI, 0, "green", "transparent", ctx)
arco(150, 150, 60, Math.PI, 0, "green", "transparent", ctx)

texto (110, 45, "Canvas", ctx)



//Casa

retangulo(0, 225, 300, 75, 'grey', ctx2);
retangulo(112.5, 142.5, 75, 82.5, 'brown', ctx2);
retangulo(37.5, 180, 18.75, 45, 'brown', ctx2);
retangulo(255, 217.5, 18.75, 45, 'brown', ctx2);

arco(46.875, 165, 30, 0,2*Math.PI, 'green', 'green', ctx2);
arco(264.375, 202.5, 30, 0,2*Math.PI, 'green', 'green', ctx2);
arco(232.5, 67.5, 33.75, 0,2*Math.PI, 'yellow', 'yellow', ctx2);

retangulo(0,225, 37.5, 75, 'dodgerblue', ctx2);
retangulo(0, 262.5, 112.5, 37.5, 'dodgerblue', ctx2);

arco(0,225, 37.5, 0,2*Math.PI, 'dodgerblue', 'dodgerblue', ctx2);
arco(112.5, 300, 37.5, 0,2*Math.PI, 'dodgerblue', 'dodgerblue', ctx2);

retangulo(120, 165, 22.5, 22.5, 'dodgerblue', ctx2);
retangulo(157.5, 165, 22.5, 22.5, 'dodgerblue', ctx2);
retangulo(142.5, 187.5, 15, 37.5, 'darkred', ctx2);

linha(112.5, 142.5, 150, 105, 'salmon', ctx2)
linha(150, 105, 187.5, 142.5, 'salmon', ctx2)
linha(187.5, 142.5, 112.5, 142.5, 'salmon', ctx2)

triangulo(112.5, 142.5, 150, 105, 187.5, 142.5, 'salmon', 'transparent', ctx2)
