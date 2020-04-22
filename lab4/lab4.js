'use strict';
 
class GraphClass
 {
	constructor(num,G_count)
	{
		this.alfa = 2 * Math.PI / G_count * (num - 1);
		this.x = canvas.width / 2 + RADIUS * Math.cos(this.alfa);
		this.y = canvas.height / 2 + RADIUS * Math.sin(this.alfa);
		this.num = num;
		this.x2 = canvas.width / 2 + (RADIUS + R_OF_OUT_CIRCLE + RADIUS_GR) * Math.cos(this.alfa) ;
		this.y2 = canvas.height / 2 + (RADIUS + R_OF_OUT_CIRCLE + RADIUS_GR) * Math.sin(this.alfa);
		this.x3 = canvas.width / 2 + (RADIUS + R_OF_OUT_CIRCLE*2 + RADIUS_GR) * Math.cos(this.alfa) ;
		this.y3 = canvas.height / 2 + (RADIUS + R_OF_OUT_CIRCLE*2 + RADIUS_GR) * Math.sin(this.alfa);
    this.graphDegree = 0;
    this.graphInDegree = 0;
    this.graphOutDegree = 0;
    
		
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

function BFS(arr,first = 0,next,numerable = false,arrBFS = [],bfs = [])  
{

  createArray(arrBFS);
  let queue = [];
  let vertex,counter;
  let last,prev;
  let edge = [];
  let counterEdge = 0;
  for(let k = 0;k < G_COUNT;k++) bfs.push(0);
  bfs[first] = 1;
  queue.push(first);
  prev = queue[0];
  counter = 1;
  while(queue.length)
  {
    vertex = queue[0];
    if(next > 12) prev = 1;
    console.log(next);
    for(let i = 0; i < G_COUNT && next;i++)
    {
      if(arr[vertex][i] && bfs[i] == 0)
      {
        arrBFS[vertex][i] = 1;
        highlightGG(graph[vertex].x,graph[vertex].y,RADIUS_GR,numerable);
        edge[counter] = new Vector(graph[vertex].x, graph[vertex].y, graph[i].x, graph[i].y, counter);
      highlightV(edge[counter]);

              counter++;
        bfs[i] = counter;
        queue.push(i);
          if(prev != vertex ){highlightGB(graph[prev].x,graph[prev].y,RADIUS_GR);prev = vertex}
        next--;
      } 
    }
    last = queue[0];
    highlightG(graph[last].x, graph[last].y, RADIUS_GR,counterEdge);    
    counterEdge++;
    queue.shift();
    
  }
}
 // console.table(bfs);
function clearBFS()
{
  ctx.clearRect(0,0,canvas.width,canvas.height);
  next = 0;
  createAndDrawG(G_COUNT);

}

function workWithBFS()
{
  BFS(arrN,0,next,false);
  next++;

}

function justBFS()
{
  let bfs = [];
  let arrBFS = [];
  BFS(arrN,0,G_COUNT,true,arrBFS,bfs);
  console.table(arrBFS);
  console.table(bfs);
}


//FindTwoStepWays(arrN);
//lookForStrongComp(MatrixOfStrongLink(arrN));
//console.log(someObj["1"]);
//console.table(createMatrixCondens(arrN));
// next - controle the count of times when you click NEXT
var next = 0;

createAndDrawG(G_COUNT);
elemN.onclick = Napr;
elemNext.onclick = workWithBFS;
//elemUn.onclick = UnNapr;
elemMatrix.onclick = writeArr;
elemClear.onclick = clearBFS;
elemBFS.onclick = justBFS;
//elemTwoStep.onclick = writeTwoStep;
//elemThreeStep.onclick = writeThreeStep;
//elemDos.onclick = writeDos;
//elemLink.onclick = writeLink;
//elemSortLink.onclick = writeStrongLinks;
//elemCreateCondGr.onclick = makeGraphConds;