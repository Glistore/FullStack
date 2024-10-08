let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");

// retângulos
ctx.beginPath();
ctx.lineWidth = 0;
ctx.fillStyle = 'red';
ctx.strokeRect(0,0,50,50);
ctx.fillRect(0,0,50,50);
ctx.closePath();

// retângulos
ctx.beginPath();
ctx.lineWidth = 0;
ctx.fillStyle = 'yellow';
ctx.strokeRect(0,350,50,400);
ctx.fillRect(0,350,50,400);
ctx.closePath();

// retângulos
ctx.beginPath();
ctx.lineWidth = 0;
ctx.fillStyle = 'blue';
ctx.strokeRect(350,0,400,50);
ctx.fillRect(350,0,400,50);
ctx.closePath();

// retângulos
ctx.beginPath();
ctx.lineWidth = 0;
ctx.fillStyle = 'green';
ctx.strokeRect(350,350,400,400);
ctx.fillRect(350,350,400,400);
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.fillStyle = 'white';
ctx.arc(200,200,50,0,Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.fillStyle = 'yellow';
ctx.arc(330,125,20,0,2*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

// linhas
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.moveTo(0,0);
ctx.lineTo(400,400);
ctx.stroke();
ctx.closePath();

// linhas
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.moveTo(0,400);
ctx.lineTo(400,0);
ctx.stroke();
ctx.closePath();

// linhas
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.moveTo(0,200);
ctx.lineTo(400,200);
ctx.stroke();
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.fillStyle = 'yellow';
ctx.arc(70,125,20,0,2*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

// texto
ctx.beginPath();
ctx.lineWidth = 10;
ctx.fillStyle = 'black';
ctx.font = "25px Arial";
ctx.fillText("Desenvolvimento Web",75,75);
ctx.closePath();