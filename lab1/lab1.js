'use strict';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const G_COUNT = 12;
let countV = 0;
let graph = [];
let vector = [];
const RADIUS = 170;
const RADIUS_GR = 20;
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
    ctx.moveTo(vec.x3,vec.y3);
    ctx.lineTo(vec.x4,vec.y4);
    ctx.lineWidth = 2;    
    ctx.strokeStyle = '#ff0000';
    ctx.stroke();

    // ctx.fillStyle = 'black' ;
    // ctx.textAlign = "center";
    // ctx.font = "18px serif";
    // ctx.fillText(`${vec.num}`, (vec.x1 + vec.x2) / 2, (vec.y1 + vec.y2) / 2) ; 

}

function createAndDrawG()
{
for (let i = 0; i < G_COUNT; i++)
{
 graph[ i ] = new GraphClass( i + 1);
 drawG(graph[i].x, graph[i].y, RADIUS_GR, graph[i].num);
}
}

function createAndDrawV(){
for (let i = 0; i < G_COUNT; i++ )
{
	for(let j = 0; j < G_COUNT; j++)
	{
if(arrN[i][j] == 1)
{
vector[countV] = new Vector(graph[i].x,graph[i].y,graph[j].x,graph[j].y,countV)
drawV(vector[countV]  );
countV++;
}
}
}
}

createAndDrawG();
createAndDrawV();
vector[50] = new Vector(canvas.width,graph[10].y,graph[10].x,graph[10].y,22)
drawV(vector[50]);
let newAlfa = (vector[50].x * vector[10].x + vector[50].y * vector[10].y)/(vector[50].length() * vector[10].length());

console.log(newAlfa);