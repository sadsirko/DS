'use strict';


const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const elemN = document.getElementById('elemN');
const elemUn = document.getElementById('elemUn');
const elemMatrix = document.getElementById('elemmatrix');
const elemTwoStep = document.getElementById('elemtwostep');
const elemThreeStep = document.getElementById('elemthreestep');
const elemDos = document.getElementById('elemDos');
const elemLink = document.getElementById('elemLink');
const elemSortLink = document.getElementById('elemSortLink');
const elemNext = document.getElementById('elemNext');
const elemClear = document.getElementById('elemClear');
const elemBFS  =  document.getElementById('elemBFS');

const G_COUNT = 12;
let countV = 0;
let graph = [];
let vector = [];
let vectorUn = [];
const RADIUS = 220;
const RADIUS_GR = 23;
const ELIPSE_WIDTH = 20;
const R_OF_OUT_CIRCLE = 10;

 let arrN =                [
    [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1 ] ,
     [ 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0 ] ,
     [ 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1 ] ,
     [ 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0 ] ,
     [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ] ,
     [ 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ] ,
     [ 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0 ] ,
     [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0 ] ,
     [ 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0 ] ,
     [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0 ] ,
     [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
     [ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ]  ] 
   
 
// let arrN = [
//   [0,1,0,1,0],
//   [0,0,0,0,1],
//   [1,0,0,0,0],
//   [0,0,1,0,1],
//   [0,1,0,0,0]
// ]
let arrUn = [];


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

function writeArray(arr){
let lines = [];

  for (let i = 0; i < G_COUNT; i++) {
lines[i] = "";
    
  for (let j = 0; j < G_COUNT; j++) {
    lines[i] = lines[i] + " " + `${arr[i][j]}` + " ";   
    }
}
for (let i = 0; i < G_COUNT; i++) {
console.log(lines[i]);
}
}
//arr2 = arr1
function copyArray( arr1,arr2 )
{
 
for (let index = 0; index < G_COUNT; index++) {
    arr2[index] = [];
  for (let j = 0; j < G_COUNT; j++) {
    if (arr1[index][j]) arr2[index][j] = 1 * arr1[index][j];
    else arr2[index][j] = 0; 
  
  }
}
}

function createArray( arr ,a = G_COUNT,b = G_COUNT )
{
 
for (let index = 0; index < a; index++) {
    arr[index] = [];
  for (let j = 0; j < b; j++) {
    arr[index][j] = 0; 
  
  }
}
}

function powArray ( res,  arr,  N,  pow)
{   //int i, j, k, p = 1;
    let i, j, k, p = 1;
//  int **temp = CreateArray (N); 
    let temp = [];
    createArray(temp,);
    createArray(res);
    for (i = 0; i < N; i++)
            for (j = 0; j < N; j++)
                res[i][j] = arr[i][j] * 1;
    
    while (++p <= pow)
    {   for (i = 0; i < N; i++)
            for (j = 0; j < N; j++)
                for (k = 0; k < N; k++)
                    temp[i][j] += res[i][k] * arr[k][j]; 
        
        for (i = 0; i < N; i++)
            for (j = 0; j < N; j++)
            {   res[i][j] = temp[i][j] * 1;
                temp[i][j] = 0;
            }
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

function chekIfOdnorOreiented(graph)
{
    let iN;
    let out;
    iN = graph[1].graphInDegree ;
    out = graph[1].graphOutDegree ;
for(let i of graph ){
    if(i.graphInDegree !=  iN || i.graphOutDegree != out){
        return false;
    }}
    return true;
}

function chekIfOdnorUnoriented(graph)
{
    let a;
    a = graph[1].graphDegree ;
for(let i of graph ){
    if(i.graphDegree !=  a ){
        return false;
    }}
    return true;
}

function chekIfSoloEdgeUn(graph)
{
    let solo =[];
for(let i of graph){
    if( i.graphDegree == 1) solo.push(i.num);
}
return solo;
}

function chekIfSoloEdge(graph)
{
    let solo =[];
    let a ,b;
for(let i of graph){
    a = (i.graphInDegree == 1 && i.graphOutDegree == 0);
    b = (i.graphInDegree == 0 && i.graphOutDegree == 1);
    if( a || b ) solo.push(i.num) ;
} 
return solo;
}

function chekIfIzolatedOr(graph)
{
    let izol =[];
    let a ,b;
for(let i of graph){
    a = (i.graphInDegree == 0 && i.graphOutDegree == 0);
    b = (i.graphInDegree == 0 && i.graphOutDegree == 0);
    if( a || b ) izol.push(i.num) ;
} 
return izol;
}

function chekIfIzolatedUnor(graph)
{
    let izol =[];
for(let i of graph)
{
      if( i.graphDegree == 0) izol.push(i.num) ;
} 
return izol;
}

function addArrayBull(arr1,arr2,res)
{
  createArray(res);
  for(let i = 0; i < G_COUNT; i++)
  {
    for (let j = 0; j < G_COUNT; j++)
    {
      if(arr1[i][j] || arr2[i][j]) res[i][j] = 1;  
      else res[i][j] = 0;
    }
  }
}

//MAtrix of Dosyagnist
function createArrDos(arr)
{
  let res = [];
  let pow = [];
  let res2 = [];
  createArray(res);
  createArray(res2);
  for(let i = 1; i < G_COUNT - 1; i++)
  {
    powArray(pow,arr,G_COUNT,i)
    addArrayBull(pow,res,res2);
    copyArray(res2,res);
  } 
  return res;
}

function Napr() 
{
  createAndDrawG(G_COUNT);
  createAndDrawV(arrN);
  console.log(' \noriented graph\n ');
  for(let i of graph){
    console.log(`graph ${i.num} \t Indegree ${i.graphInDegree } \t Outdegree ${i.graphOutDegree }`);
  }
  if(chekIfOdnorOreiented(graph)) console.log(`Орієнтований граф однорідний \n In : ${graph[0].graphInDegree}
Out : ${graph[0].graphOutDegree} `);
 
else console.log('орієнований граф неоднорідний');

if(chekIfSoloEdge(graph).length > 0) console.log(`висячі вершини : ${chekIfSoloEdge(graph)}`);
if(chekIfIzolatedOr(graph).length > 0) console.log(`ізольовані вершини : ${chekIfIzolatedOr(graph)}`);

}

function UnNapr()
{
  createAndDrawG(G_COUNT);
  createAndDrawVUn(arrUn);
  console.log(' \nunoriented graph\n ');
  for(let i of graph)
  {
    console.log(`graph ${i.num} \t degree ${i.graphDegree }`);
  }
  if(chekIfOdnorUnoriented(graph)) console.log(`Неорієнтований граф однорідний степінь: ${graph[0].graphDegree} `);
 
  else console.log('неорієнований граф неоднорідний');
 
 
  if(chekIfSoloEdgeUn(graph).length > 0) console.log(`висячі вершини : ${chekIfSoloEdgeUn(graph)}`);
  if(chekIfIzolatedUnor(graph).length > 0) console.log(`ізольовані вершини : ${chekIfIzolatedUnor(graph)}`);
 
}

function Transpon(arr)
{
  let res = [];
  createArray(res);
  for (let i = 0; i < G_COUNT; i++) {
    for (let j = 0; j < G_COUNT; j++) {
     res[j][i] = arr[i][j] * 1;
    } 
  }
  return res;
}

function delCycle(arr)
{
  let helpArr = []
  createArray(helpArr);
  for(let i = 0; i < G_COUNT; i++) helpArr[i][i] = 0;
  arr = MultiMAtrix(arr,helpArr);
}

function MultiMAtrix(arr1,arr2)
{
  let res = [];
  createArray(res);
  for (let i = 0; i < G_COUNT; i++) {
    for (let j = 0; j < G_COUNT; j++) {
     res[i][j] = arr1[i][j] * arr2[i][j];
    } 
  }
  return res;
}

function findTwoStepWays(arr)
{

  let arrPowTwo = [];
  
  powArray(arrPowTwo,arr,G_COUNT,2);
  console.table(arrPowTwo);
  console.log("КВАДРАТ МАТРИЦІ ")
  console.log('Усі шляхи довжиною 2 :')
  arrPowTwo.forEach((element, index1, array) => { 
    element.forEach((element2,index2, array2) => {
      if(element2 != 0) {
        
        //console.log(` [${index1}][${index2}] `);
         IfthereAreWaysTo(arr,index1,index2);
      } 
   }); 
  });

  function IfthereAreWaysTo(arr,index1,index2)
  {
   // let counter = 0;
    for(let i = 0; i < G_COUNT; i++ )
    {
      if(arr[i][index2] == 1)
      {
        if (arr[index1][i]) {
        console.log(`${index1 } - ${i } - ${index2}`)
        }
      }
    }
  }

}

function findThreeStepWays(arr)
{
  let arrPowTwo = [];
  let arrPowThree = [];
  powArray(arrPowTwo,arr,G_COUNT,2);
  powArray(arrPowThree,arr,G_COUNT,3);
  console.log("КУБ МАТРИЦІ ");
  console.table(arrPowThree);


  arrPowThree.forEach((element, index1, array) => { 
    element.forEach((element2,index2, array2) => {
      if(element2 != 0) {
        //console.log(` [${index1}][${index2}] `);
         IfthereAreWaysTo(arr,index1,index2);
      } 
   }); 
  });
// схема которую обяснили в телееге
  function IfthereAreWaysTo(arr,index1,index2)
  {
   // let counter = 0;
    for(let i = 0; i < G_COUNT; i++ )
    {
      if(arr[i][index2] == 1)
      {
        if (arrPowTwo[index1][i]) {
          for(let j = 0; j < G_COUNT; j++ )
          {
            if(arr[j][i] == 1)
            {
              if (arr[index1][j]) {
              console.log(`${index1} - ${j } - ${i } - ${index2 }`)
              }
            }
          }
        }
      }
    }
  }



}

function MatrixOfStrongLink(arr)
{ let arr2 = [];
  let link = [];
  createArray(arr2);
  createArray(link);
  copyArray(arr,arr2);
  
  link = MultiMAtrix( createArrDos(arr),Transpon(createArrDos(arr2))) ;
  return link;
}

function lookForStrongComp(arr)
{
  let list = [];
  let temp = []; 
  let res = {};
  let idx = {};
  for (let i = 0; i < G_COUNT; i++) 
  {
    for (let j = 0; j < G_COUNT; j++) 
    {
      temp.push(arr[j][i]);  
    } 
    list[i] = temp.join("");
    temp = [];
  }
  list.forEach(element => {
    res[element] = [];
    idx[element] = list.indexOf(element);;
  });

  list.forEach(element => {
    
    res[element].push(idx[element]);
    idx[element] = list.indexOf(element,idx[element] + 1);
  
  });
    return(res);
}

  function returnStrongLinks(arr)
{
  let local = [];
  let compare ;
  let counter = 0;
  let list = lookForStrongComp(MatrixOfStrongLink(arrN));
  let res = {};
  createArray(local, arr.length, 1);
  local.fill("0");
  compare = local.join("");
  
   for (let i in lookForStrongComp(MatrixOfStrongLink(arrN))) {
    if (i == compare) 
    {
      list[i].forEach(element =>{ res[`K${counter}`] = [element] ; 
        counter++}) 
    }
    else 
    {
      res[`K${counter}`] = list[i];
      counter++
    };
    // console.log(lookForStrongComp(MatrixOfStrongLink(arrN)).valueOf(i));    
   }
   return res;

}

function createMatrixCondens(arr)
{
  let obj = returnStrongLinks(arr);
  let MatrixCondens = [];
  let length = Object.keys(obj).length;
  let counter;
  createArray(MatrixCondens, length, length);
  for(let i = 0; i < length; i++)
  {
      obj[`K${i}`].forEach(element => {
      for(let j = 0;j < G_COUNT; j++)
      {
        if(arr[element][j] == 1)
        {
          for(let k = 0; k < length; k++)
           {
            obj[`K${k}`].forEach(element2 => {
              
                if(element2 == j)
                {
                MatrixCondens[i][k] = 1;
              }
              
            })
          }
        }
      }
    })   
  }
  for(let o = 0; o < MatrixCondens.length; o++){
    for(let n = 0; n < MatrixCondens.length; n++){
      if(o == n)MatrixCondens[o][n] = 0;
    } 
  }
  return MatrixCondens;
} 

function writeArr()   
{
console.table(arrN);
}

function writeTwoStep()
{
  findTwoStepWays(arrN);
}

function writeThreeStep()
{
  findThreeStepWays(arrN);
}
 
function writeDos()
{
  console.log("\nМАТРИЦЯ ДОСТЯЖНОСТІ : ");
 console.table(createArrDos(arrN));
}

function writeLink()
{
  console.log("\nМАТРИЦЯ СИЛЬНОЇ ЗВ'ЯЗНОСТІ: ");
 console.table(MatrixOfStrongLink(arrN));
}

function writeStrongLinks()
{
  console.log(" \nКОМПОНЕНТИ СИЛЬНОЇ ЗВ'ЯЗНОСТІ :");
  let local = [];
  let compare ;
  let counter = 0;
  let list = lookForStrongComp(MatrixOfStrongLink(arrN));
  createArray(local, G_COUNT, 1);
  local.fill("0");
  compare = local.join("");
  
   for (let i in lookForStrongComp(MatrixOfStrongLink(arrN))) {
    if (i == compare) {list[i].forEach(element =>{console.log(`K ${counter} : ${element}`  ); counter++}) }
    else {console.log(`K ${counter} : ${list[i]}`);counter++};
    
    // console.log(lookForStrongComp(MatrixOfStrongLink(arrN)).valueOf(i));    
   }

}

function makeGraphConds()
{

   ctx.clearRect(0,0,canvas.width,canvas.height);

createAndDrawG(6);
  createAndDrawV(createMatrixCondens(arrN),6);
  console.log("Матриця графа конденсації : ");
  console.table(createMatrixCondens(arrN));
 

}

function BFS(arr,first = 0,next,numerable = false)
{
  function highlightG(x, y,r,num)
    {
   if(numerable)
   {
        ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2, false);
     ctx.fillStyle = 'black' ;
      ctx.fill();
      ctx.closePath();
}
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, false);
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
  ctx.closePath();
  if(numerable)
  {
  ctx.fillStyle = 'white' ;
  ctx.textAlign = "center";
   ctx.font = "18px serif";
ctx.fillText(`${num}`, x, y + 7) ; 
} 
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
  delCycle(arr);
  let whileNext = next;
  let queue = [];
  let bfs = [];
  let vertex,counter;
  let last;
  let edge = [];
  let counterEdge = 0;
  for(let k = 0;k < G_COUNT;k++) bfs.push(0);
  bfs[first] = 1;
  queue.push(first);
  counter = 1;
  while(queue.length   )
  {
    vertex = queue[0];
    for(let i = 0; i < G_COUNT && next;i++)
    {
      if(arr[vertex][i] && bfs[i] == 0)
      {
        edge[counter] = new Vector(graph[vertex].x, graph[vertex].y, graph[i].x, graph[i].y, counter);
      highlightV(edge[counter]);
     
              counter++;
        bfs[i] = counter;
        queue.push(i);
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
  BFS(arrN,0,G_COUNT,true);
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