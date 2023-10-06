function printSpiral(a){
    let arr = [];
    let m = a[0].length;
    let n = a.length;
    
    let top = 0;
    let left = 0;
    let right = m-1;
    let bottom = n-1;
    
    while(left <= right && top <= bottom){
      // 1) right direction...
      for(i = left; i<=right; i++){
        arr.push(a[top][i])
      }
      top++;
      
      // 2) bottom direction...
      for(i = top; i<=bottom; i++){
        arr.push(a[i][right])
      }
      right--;
      
      // 3) left direction...
      if(top <= bottom){
      for(i = right; i>=left; i--){
        arr.push(a[bottom][i])
      }
      bottom--;
      }
      
      // 4) top direction...
      if(left <= right){
      for(i = bottom; i>=top; i--){
        arr.push(a[i][left]);
      }
      left++;
      }
    }
    
    console.log(arr);
  }
  
  let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
  
  printSpiral(matrix);