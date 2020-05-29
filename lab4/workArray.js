
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