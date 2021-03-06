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

function sumMatrix(arr1,arr2)
{
  let res = [];
  createArray(res);
  arr1.forEach(((element,val) =>(
    element.forEach((_el2,val2) =>
    {
      res[val][val2] = arr1[val][val2] + arr2[val][val2]; 
    }))))
  return res;
}

function matrixNOT(arr){
  let res = [];
  createArray(res);
  arr.forEach( ((element,val) =>(
    element.forEach((_el2,val2) =>
    {let elem = arr[val][val2]; 
   if(!!elem ) res[val][val2] = 0;
   else res[val][val2] = 1;  
    }))))
    return res;
}

function tril(level)
{
  let trilAr = [];
  let counter = 0;
  createArray(trilAr,level,level);
  for (let i = 1; i < trilAr.length; i++) {
    for (let j = 0; j < i; j++) {
      
      trilAr[i][j] = 1;
    
    }  
   }
  return trilAr;
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

function createMatrixCondens(arr, G_count = G_COUNT)
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

function createUnAimG(arrUn)
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

//lab4
function BFS(arr, first = 0, next, numerable = false, arrBFS = [], bfs = [])  
{

  createArray(arrBFS);
  let queue = [];
  let vertex,counter;
  let last,prev;
  let edge = [],edgeWasUsed = {};

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
//    console.log(next);
    for(let i = 0; i < G_COUNT && next;i++)
    {
      if(arr[vertex][i] && bfs[i] == 0)
      {
        arrBFS[vertex][i] = 1;
        highlightGG(graph[vertex].x,graph[vertex].y,RADIUS_GR);
        edge[counter] = new Vector(graph[vertex].x, graph[vertex].y, graph[i].x, graph[i].y, counter);
       highlightV(edge[counter]);

              counter++;
        bfs[i] = counter;
        queue.push(i);
          if(prev != vertex )
          {
            highlightGB(graph[prev].x,graph[prev].y,RADIUS_GR,last,edgeWasUsed[last],true);
            prev = vertex
          }
        next--;
      } 
    }
    last = queue[0];
    highlightG(graph[last].x, graph[last].y, RADIUS_GR,counterEdge,true);    
    edgeWasUsed[last] = counterEdge;
    counterEdge++;
    queue.shift();
    
  }
}
 // console.table(bfs);

function weightCreate(weight)
{
  let b = [];
  let matrixWeight = [];
 let trilArr = [];
 trilArr = tril(G_COUNT);  
  createArray(b);
  createArray(matrixWeight);

  matrixWeight =  MultiMAtrix(weight,arrN);
  copyArray(matrixWeight,b);
   b.forEach( ((element,val) =>(
     element.forEach((_el2,val2) =>
     {let elem = b[val][val2]; 
    if(!!elem) b[val][val2] = 1;
    else b[val][val2] = 0;  
     }))))
     let a = MultiMAtrix(b,Transpon(matrixNOT(b)));
     let c =  MultiMAtrix(MultiMAtrix(b,Transpon(b)),tril(G_COUNT));
    // console.table(sumMatrix(a,c))
    // console.table(matrixWeight);
  matrixWeight = MultiMAtrix(sumMatrix( a , c),matrixWeight);
     weight = sumMatrix(matrixWeight,Transpon(matrixWeight));
// console.table(weight);
 return weight;

}
// Min of Array with exeptions that have some %(mod)

const min = (arr,exeptions = []) =>
    {
      let res = {result : Infinity, pos : 0,div : Infinity }
      let a = b = 0;
      c = false;
      for(let j = 0; j < arr.length; j++ )
      {
         a = arr[j];
         b = ( j % G_COUNT);
         c = (exeptions.includes(b)); 
         if(!c &&  a < res.result )
        {
          res.result = a;
          res.pos = b;
          res.div = (j - b) / G_COUNT;
        }
      }
      return res;
    }




function fillG(G, tmpCounter) {
  for (let i = 0; i < G_COUNT; i++) {
    G.push(tmpCounter);
    tmpCounter++;
  }
  return G;
}

function makeUsableMatr(weightArr) {
  let primMatrix = [];
  createArray(primMatrix);
  copyArray(weightArr, primMatrix);
  for (let i = 0; i < primMatrix.length; i++) {
    for (let j = 0; j < primMatrix.length; j++) {
      if (!primMatrix[i][j])
        primMatrix[i][j] = Infinity;
    }
  }
  return primMatrix;
}

const findWay = (fromTo,index) =>
{
  let counter = 0;
  let arr = [];
  arr.push(index);
  while(index){
  arr.push(fromTo[index]);
  index = fromTo[index];
  }
  return arr;
}

const dijkstra = (weight,first,nextD) => 
{
  weight =  weightCreate(weight);
  copyArray(arrN,arrUn);
  createUnAimG(arrUn);

  let dextraArr = [];
  let vertexArr = [];
  let tmp = vecCount = counter = 0;
  let tmpNow = first;
  let prevWeight = 0;
  let a,b,d;
  let fromTo = [];
  let prevPos = 0;
  let locArr = [];
  let vector = [];
  vertexArr = [];
  vertexArr.push(first);
  createArray(dextraArr,G_COUNT,G_COUNT,Infinity);
  dextraArr[first][first] = 0;
  tmpNow = vertexArr[vertexArr.length - 1];


    for(let i = first + 1; i < nextD + 1; i++)
    {
     for(let j = 0; j < G_COUNT; j++)
     {
      tmp = weight[tmpNow][j];
      a = (tmp + prevWeight < dextraArr[i - 1][j ]);
      b = (counter <= nextD);
      d = (vertexArr.includes(j))
      if(b ){
      if(arrUn[tmpNow][j] && a)
      {
       dextraArr[i][j] = tmp + prevWeight;
       fromTo[j] = tmpNow; 
      // vector[vecCount] = new Vector(graph[tmpNow].x,graph[tmpNow].y,graph[j].x,graph[j].y,vecCount);
      // highlightV(vector[vecCount]);
       // vecCount++;
       drawCircuit(graph[j], "red", (dextraArr[i][j] == Infinity)? '∞' :dextraArr[i][j]);
        if(d){
        drawCircuit(graph[j], "green", (dextraArr[i][j] == Infinity)? '∞' :dextraArr[i][j]);
        }
      }
      else {
      
        dextraArr[i][j] = dextraArr[i - 1][j];
        drawCircuit(graph[j], "yellow",( dextraArr[i][j] == Infinity)? '∞' :dextraArr[i][j]);
       
        if(d )
        {
        drawCircuit(graph[j], "blue", (dextraArr[i][j] == Infinity)? '∞' :dextraArr[i][j]);
        }

      }}
     }
     for(let i = 0; i < G_COUNT;i++)
     {
      
      // вписать как-то тот же tmpNow
     }
     counter++;
     prevWeight = min(dextraArr[i],vertexArr).result;
     prevPos = min(dextraArr[i],vertexArr).pos;
     vertexArr.push(min(dextraArr[i],vertexArr).pos);
     tmpNow = vertexArr[vertexArr.length - 1];
    

  }
 giveWays(locArr, fromTo,dextraArr);
  console.table(vertexArr);
  console.table(dextraArr);
  console.log(nextD);
  nextD++;

}

function giveWays(locArr, fromTo,dextraArr) {
  let str = "";
  let tmp = 0;
  for (let i = 0; i < G_COUNT; i++) {
    locArr = findWay(fromTo, i);
    tmp = locArr.length - 1;
    str += `to : ${i} weight : ${dextraArr[G_COUNT - 1][i]} `
    while (tmp + 1) {
      str += `${locArr[tmp]}  `;
      if (tmp)
        str += `-> `;
      tmp--;
    }
    console.log(str);
    str = "";
  }
}
