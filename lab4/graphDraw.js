
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

function drawVUn(vec) 
{
ctx.beginPath();
ctx.moveTo(vec.x3,vec.y3);
ctx.lineTo(vec.x4,vec.y4);
ctx.lineWidth = 1.5;    
ctx.strokeStyle = '#ff0000';
ctx.stroke();
// ctx.fillStyle = 'black' ;
// ctx.textAlign = "center";
// ctx.font = "18px serif";
// ctx.fillText(`${vec.num}`, (vec.x1 + vec.x2) / 2, (vec.y1 + vec.y2) / 2) ; 
}
// Vectors that are in both ways
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
//draw circuit in graphs/*
function drawCircl(gr)
{
ctx.beginPath();
ctx.arc(gr.x2, gr.y2, R_OF_OUT_CIRCLE, 0, Math.PI * 2);
ctx.lineWidth = 1.5;    
ctx.strokeStyle = '#ffff00';
ctx.stroke();
// debug for last number of graph
let vec;
if(gr.num == G_COUNT ) vec = new Vector(graph[0].x,graph[0].y,graph[gr.num-1].x,graph[gr.num-1].y,50)
else vec = new Vector(graph[gr.num].x,graph[gr.num].y,graph[gr.num-1].x,graph[gr.num-1].y,50)

   ctx.translate(gr.x3,gr.y3);
ctx.rotate(countAngleToGorizont(vec));
ctx.translate(-gr.x3,-gr.y3);

ctx.moveTo(gr.x3,gr.y3);
ctx.lineTo(gr.x3 - 8,gr.y3 + 5);

ctx.moveTo(gr.x3,gr.y3);
ctx.lineTo(gr.x3 - 8,gr.y3 - 5);

ctx.lineWidth = 1.5;    
ctx.strokeStyle = '#ff0000';
ctx.stroke();


 ctx.translate(gr.x3,gr.y3);
ctx.rotate(-countAngleToGorizont(vec));
ctx.translate(-gr.x3,-gr.y3);


}

function drawCircuit(graph)
{
ctx.beginPath();
ctx.arc(graph.x2, graph.y2, R_OF_OUT_CIRCLE, 0, Math.PI * 2);
ctx.lineWidth = 1.5;    
ctx.strokeStyle = '#ff0000';
ctx.stroke();
}

function highlightG(x, y,r,num,numerable = false)
{

ctx.beginPath();
ctx.arc(x, y, r, 0, Math.PI * 2, false);
ctx.lineWidth = 3;
ctx.strokeStyle = '#ffffff';
ctx.stroke();
ctx.closePath();
if(numerable)
{
ctx.fillStyle = 'blue' ;
ctx.textAlign = "center";
ctx.font = "12px serif";
ctx.fillText(`${num}`, x + 7, y + 20) ; 
} 
}

function highlightGG(x, y,r)
{
let widthL = 4;
ctx.beginPath();
ctx.arc(x, y, r - widthL , 0, Math.PI * 2, false);
ctx.lineWidth = widthL;
ctx.strokeStyle = 'green';
ctx.stroke();
ctx.closePath();

}

function highlightGB(x, y,r)
{
let widthL = 6;
ctx.beginPath();
ctx.arc(x, y, r - widthL, 0, Math.PI * 2, false);
ctx.lineWidth = widthL;
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.closePath();

}

function highlightV(vec) 
{
ctx.beginPath();
ctx.arc(vec.x3, vec.y3, 1, 0, Math.PI * 2);
ctx.moveTo(vec.x3,vec.y3);
ctx.lineTo(vec.x4,vec.y4);
ctx.lineWidth = 1.5;    
ctx.strokeStyle = '#ffffff';
ctx.stroke();

ctx.translate(vec.x4,vec.y4);
ctx.rotate(countAngleToGorizont(vec));
ctx.translate(-vec.x4,-vec.y4);

ctx.moveTo(vec.x4,vec.y4);
ctx.lineTo(vec.x4 - 8,vec.y4 + 5);

ctx.moveTo(vec.x4,vec.y4);
ctx.lineTo(vec.x4 - 8,vec.y4 - 5);

ctx.lineWidth = 1.5;    
ctx.strokeStyle = '#ffffff';
ctx.stroke();


ctx.translate(vec.x4,vec.y4);
ctx.rotate(-countAngleToGorizont(vec));
ctx.translate(-vec.x4,-vec.y4);
}

function createAndDrawG(numberOfVertex)
{
for (let i = 0; i < numberOfVertex; i++)
{
graph[ i ] = new GraphClass( i ,numberOfVertex);
drawG(graph[i].x, graph[i].y, RADIUS_GR, graph[i].num);
}
}

function createAndDrawV(arrN,G_count = G_COUNT)
{ 
ctx.clearRect(0, 0, canvas.width, canvas.height);
createAndDrawG(G_count);

let counter = [];
for (let i = 0; i < G_count; i++ ){ 
 counter[i] = [];
for(let j = 0; j < G_count; j++){
counter[i][j] = 0;
}
}


for (let i = 0; i < G_count; i++ )
{
for(let j = 0; j < G_count; j++)
{

if(arrN[i][j] == 1)
{
vector[countV] = new Vector(graph[i].x,graph[i].y,graph[j].x,graph[j].y,countV)
graph[i].graphOutDegree++;
graph[j].graphInDegree++;
if (arrN[i][j] == arrN[j][i] && counter[i][j] == 0) {
drawVP(vector[countV]);
counter[j][i]++;
counter[i][j]++;
}
else drawV(vector[countV]);
countV++;
if (i == j ){
graph[i].graphDegree += 2;
drawCircl(graph[i]);
}

}
}
}
}

function createAndDrawVUn(arrUn)
{
ctx.clearRect(0, 0, canvas.width, canvas.height);
createAndDrawG(G_COUNT);
createUnAimG();
for (let i = 0; i < G_COUNT; i++ )
{
  for(let j = 0; j < G_COUNT; j++)
    {

    if(arrUn[i][j] == 1)
  {
  vectorUn[countV] = new Vector(graph[i].x,graph[i].y,graph[j].x,graph[j].y,countV)
  drawVUn(vectorUn[countV]);
  graph[i].graphDegree++;

  if (i == j ){
  graph[i].graphDegree += 2;
  drawCircuit(graph[i]);
}
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

function createUnAimG()
{
for (let i = 0; i < G_COUNT; i++)
{
for(let j = 0; j < G_COUNT; j++)
{
if(arrUn[i][j] == 1)
arrUn[j][i] = 1;
}
}
}