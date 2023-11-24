function ceiling(){
  let low = 0;
  let high = a.length-1;
  while(low <= high){
    let mid = Math.floor((low+high)/2);
    if(a[mid] === target){
      return a[mid];
    } 
    else if(target < a[mid]){
      high = mid - 1;
    }
    else{
      low = mid + 1;
    }
  }
  
  return a[low];
}

var a = [2,3,5,9,14,16,18];
let target = 12;

let res = ceiling();
console.log(res);
