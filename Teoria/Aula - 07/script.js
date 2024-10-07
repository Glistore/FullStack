let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");
let canvas2=document.getElementById("canvas2");
let ctx2=canvas2.getContext("2d");

// retângulos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'blue';
ctx.strokeRect(10,10,50,50);
ctx.fillRect(10,10,50,50);
ctx.closePath();

// linhas
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.moveTo(0,0);
ctx.lineTo(100,100);
ctx.lineTo(100,200);
ctx.stroke();
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'blue';
ctx.arc(200,200,50,Math.PI,2*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

// texto
ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = 'black';
ctx.fillStyle = 'orange';
ctx.font = "90px Arial";
ctx.strokeText("AH EH",100,100);
ctx.fillText("AH EH",100,100);
ctx.closePath();

// retângulos
ctx2.beginPath();
ctx2.lineWidth = 0;
ctx2.fillStyle = 'red';
ctx2.strokeRect(0,0,50,50);
ctx2.fillRect(0,0,50,50);
ctx2.closePath();

// retângulos
ctx2.beginPath();
ctx2.lineWidth = 0;
ctx2.fillStyle = 'yellow';
ctx2.strokeRect(0,350,50,400);
ctx2.fillRect(0,350,50,400);
ctx2.closePath();

// retângulos
ctx2.beginPath();
ctx2.lineWidth = 0;
ctx2.fillStyle = 'blue';
ctx2.strokeRect(350,0,400,50);
ctx2.fillRect(350,0,400,50);
ctx2.closePath();

// retângulos
ctx2.beginPath();
ctx2.lineWidth = 0;
ctx2.fillStyle = 'green';
ctx2.strokeRect(350,350,400,400);
ctx2.fillRect(350,350,400,400);
ctx2.closePath();

// arcos
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'green';
ctx2.fillStyle = 'white';
ctx2.arc(200,200,50,0,Math.PI);
ctx2.stroke();
ctx2.fill();
ctx2.closePath();

// arcos
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'green';
ctx2.fillStyle = 'yellow';
ctx2.arc(330,125,20,0,2*Math.PI);
ctx2.stroke();
ctx2.fill();
ctx2.closePath();

// linhas
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'red';
ctx2.moveTo(0,0);
ctx2.lineTo(400,400);
ctx2.stroke();
ctx2.closePath();

// linhas
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'blue';
ctx2.moveTo(0,400);
ctx2.lineTo(400,0);
ctx2.stroke();
ctx2.closePath();

// linhas
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'green';
ctx2.moveTo(0,200);
ctx2.lineTo(400,200);
ctx2.stroke();
ctx2.closePath();

// arcos
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'green';
ctx2.fillStyle = 'yellow';
ctx2.arc(70,125,20,0,2*Math.PI);
ctx2.stroke();
ctx2.fill();
ctx2.closePath();

// texto
ctx2.beginPath();
ctx2.lineWidth = 10;
ctx2.fillStyle = 'black';
ctx2.font = "25px Arial";
ctx2.fillText("Desenvolvimento Web",75,75);
ctx2.closePath();