// 1) brute force approach...
function setMatrixZeros(a){
  
    for(i = 0; i<a.length; i++){
      for(j = 0; j<a[i].length; j++){
        if(a[i][j] === 0){
          
          // set entire col to -1...
          for(k = 0; k<a.length; k++){
            if(a[k][j] === 1){
              a[k][j] = -1;
            }
          }
          
          // set entire row to -1...
          for(k = 0; k<a.length; k++){
            if(a[i][k] === 1){
              a[i][k] = -1;
            }
          }
        }
      }
    }
    
    for(i = 0; i<a.length; i++){
      for(j = 0; j<a[i].length; j++){
        if(a[i][j] === -1){
          a[i][j] = 0;
        }
      }
    }
    
    return (a);
    
}

// 2) better solution...
function setMatrixZeros(a){
  let m = a[0].length;;
  let n = a.length;
  
  let row = new Array(n).fill(0);
  let col = new Array(m).fill(0);
  // console.log(row);
  // console.log(col);
  
  // mark row[i] && col[j] === 1;
  for(i = 0; i<n; i++){
    for(j = 0; j<m; j++){
      if(a[i][j] === 0){
        row[i] = 1;
        col[j] = 1;
      }
    }
  }
  
  // make the marked row and col as 0;
  for(i = 0; i<n; i++){
    for(j = 0; j<m; j++){
      if(row[i] || col[j]){
        a[i][j] = 0;
      }
    }
  }
  
  return(a);
}

  
let arr = [[1,1,1],[1,0,1],[1,1,1]]

let setZeroArr = setMatrixZeros(arr);
console.log(setZeroArr);