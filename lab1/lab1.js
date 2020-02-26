'use strict';
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const G_COUNT = 12;
let countV = 0;
let graph = [];
let vector = [];
const RADIUS = 170;
const RADIUS_GR = 20;
const ELIPSE_WIDTH = 20;
 let arrN =  [
  [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1 ] ,
  [ 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0 ] ,
  [ 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1 ] ,
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ] ,
  [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ] ,
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
  [ 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0 ] ,
  [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0 ] ,
  [ 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0 ] ,
  [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0 ] ,
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
  [ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ]  
  ];


class GraphClass
 {
	constructor(num)
	{
		this.alfa = 2 * Math.PI / G_COUNT * (num - 1);
		this.x = canvas.width / 2 + RADIUS * Math.cos(this.alfa);
		this.y = canvas.height / 2 + RADIUS * Math.sin(this.alfa);
		this.num = num;
	}
}

class Vector
 {
	
	constructor(x1, y1, x2, y2 , num)
	{
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
		this.num = num;
		this.x = x2 - x1;
		this.y = y2 - y1;
		this.x3 = x1 + this.x / ((this.length()) / RADIUS_GR);
	    this.y3 = y1 + this.y / ((this.length()) / RADIUS_GR);
		this.x4 = x2 - this.x / ((this.length()) / RADIUS_GR);
	    this.y4 = y2 - this.y / ((this.length()) / RADIUS_GR);
	    this.pair = false;
	}

	add(secVector) 
	{
		this.x = secVector.x + this.x;
	 	this.y = secVector.y + this.y;
	}
    
	sub(secVector) 
	{
		this.x = this.x - secVector.x;
	 	this.y = this.y - secVector.y;
	}

	length()
	{
		return Math.sqrt(this.x ** 2 + this.y ** 2); 
	}
	lengthx3x4()
	{
		return Math.sqrt((this.x4 - this.x3) ** 2 + (this.y4 - this.y3) ** 2); 
	
	}

}


   function drawG(x, y,r,num)
    {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, false);
 ctx.fillStyle = 'black' ;
  ctx.fill();
  ctx.closePath();
  ctx.fillStyle = 'white' ;
    ctx.textAlign = "center";
     ctx.font = "18px serif";
  ctx.fillText(`${num}`, x, y + 7) ; 
}
   function drawV(vec) 
   {
ctx.beginPath();
ctx.arc(vec.x3, vec.y3, 1, 0, Math.PI * 2);
    ctx.moveTo(vec.x3,vec.y3);
    ctx.lineTo(vec.x4,vec.y4);
    ctx.lineWidth = 1.5;    
    ctx.strokeStyle = '#ff0000';
    ctx.stroke();
    ctx.translate(vec.x4,vec.y4);
    ctx.rotate(countAngleToGorizont(vec));
    ctx.translate(-vec.x4,-vec.y4);

    ctx.moveTo(vec.x4,vec.y4);
    ctx.lineTo(vec.x4 - 8,vec.y4 + 5);

    ctx.moveTo(vec.x4,vec.y4);
    ctx.lineTo(vec.x4 - 8,vec.y4 - 5);

  ctx.lineWidth = 1.5;    
    ctx.strokeStyle = '#ff0000';
    ctx.stroke();

    
     ctx.translate(vec.x4,vec.y4);
    ctx.rotate(-countAngleToGorizont(vec));
    ctx.translate(-vec.x4,-vec.y4);
    // ctx.fillStyle = 'black' ;
    // ctx.textAlign = "center";
    // ctx.font = "18px serif";
    // ctx.fillText(`${vec.num}`, (vec.x1 + vec.x2) / 2, (vec.y1 + vec.y2) / 2) ; 

}
 function drawVP(vec) 
   {
     let mX = (vec.x3 + vec.x4)/2;
     let mY = (vec.y3 + vec.y4)/2;
    ctx.translate(mX, mY);
    ctx.rotate(countAngleToGorizont(vec));
    ctx.translate(-mX,-mY);

	ctx.beginPath();
	ctx.ellipse(mX, mY, vec.lengthx3x4()/2, ELIPSE_WIDTH, 0, 0, Math.PI);
	ctx.stroke();

    ctx.moveTo(mX,mY + ELIPSE_WIDTH);
    ctx.lineTo(mX - 8,mY + 5 + ELIPSE_WIDTH);

    ctx.moveTo(mX ,mY + ELIPSE_WIDTH);
    ctx.lineTo(mX - 8,mY - 5 + ELIPSE_WIDTH);
    ctx.lineWidth = 1.5;    
    ctx.strokeStyle = '#ff0000';
    ctx.stroke();

    ctx.translate(mX,mY);
    ctx.rotate(-countAngleToGorizont(vec));
    ctx.translate(-mX,-mY);
}

function createAndDrawG()
{
for (let i = 0; i < G_COUNT; i++)
{
 graph[ i ] = new GraphClass( i + 1);
 drawG(graph[i].x, graph[i].y, RADIUS_GR, graph[i].num);
}
}

function createAndDrawV()
{
	let counter = [];
	for (let i = 0; i < G_COUNT; i++ ){  counter[i] = [];
	for(let j = 0; j < G_COUNT; j++)	{
counter[i][j] = 0;
}}


for (let i = 0; i < G_COUNT; i++ )
{
	for(let j = 0; j < G_COUNT; j++)
	{
	
if(arrN[i][j] == 1)
{
vector[countV] = new Vector(graph[i].x,graph[i].y,graph[j].x,graph[j].y,countV)

if (arrN[i][j] == arrN[j][i] && counter[i][j] == 0) {
	drawVP(vector[countV]);
	counter[j][i]++;
	counter[i][j]++;
}
else drawV(vector[countV]);
countV++;

}
}
}
}

function countAngleToGorizont(vector)
{
	let newAngle = 0;
	if(vector.y > 0){
	 newAngle = Math.acos((vector.x * 1 + vector.y * 0)/(vector.length() * 1));
	}
	else {
	 newAngle = Math.acos(((vector.x1 - vector.x2) )/(vector.length())) + Math.PI;
		
	}
return newAngle;
}
createAndDrawG();
createAndDrawV();




console.log(countAngleToGorizont(vector[2]));