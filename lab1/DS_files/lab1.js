'use strict';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const G_COUNT = 12;
let countV = 0;
let graph = [];
let vector = [];
const RADIUS = 190;
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
    ctx.moveTo(vec.x1,vec.y1);
    ctx.lineTo(vec.x2,vec.y2);
    ctx.lineWidth = 2;    
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();

    ctx.fillStyle = 'black' ;
    ctx.textAlign = "center";
    ctx.font = "18px serif";
    ctx.fillText(`${vec.num}`, (vec.x1 + vec.x2) / 2, (vec.y1 + vec.y2) / 2) ; 

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
console.log(vector[1].length());