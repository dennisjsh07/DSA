// 1) brute force approach...
function rotateMatrix(a) {
    // here matrix is n*n
    let n = a.length;
    let b = [];
    
    for(i = 0; i<n; i++){
      b[i] = Array(n).fill(0);
    }
    
    for(i = 0; i<n; i++){
      for(j = 0; j<n; j++){
          b[j][(n-1)-i] = a[i][j];
      }
    }
    
    return (b);
}

// 2) optimal approach...
function rotateMatrix(a) {
    let n = a.length;
    // 1) make transpose...
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        // Swap values using a temporary variable
        let temp = a[i][j];
        a[i][j] = a[j][i];
        a[j][i] = temp;
      }
    }
    
    // 2) reverse the matrix...
    for(i = 0; i<n; i++){
      a[i].reverse();
    }
    return (a);
}
  
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let rotMatrix = rotateMatrix(matrix);
console.log(rotMatrix);
  