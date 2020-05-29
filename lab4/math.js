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

