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