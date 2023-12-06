function findElement(){
  let r = 0;
  let c = matrix[0].length-1;
  
  while(r < matrix.length && c >= 0){
    if(matrix[r][c] === target){
      return true;
    }
    else if(target < matrix[r][c]){
      c--;
    }
    else{
      r++;
    }
  }
  return false;
}

function findElement(){
  if (matrix.length === 0 || matrix[0].length === 0) {
      return false;
    }
  
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    let low = 0;
    let high = rows * cols - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const midValue = matrix[Math.floor(mid / cols)][mid % cols];
  
      if (midValue === target) {
        return true;
      } else if (midValue < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return false;
}
  
let matrix = [[1,2,3,4,5],[11,12,13,14,15],[21,22,23,24,25],[31,32,33,34,35],[41,42,43,44,45]];
let target = 34;
let result = findElement();
console.log(result);