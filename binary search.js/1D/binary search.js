function binarySearch(){
  let low = 0;
  let high = n-1;
  while(low <= high){
    let mid = Math.floor((low+high)/2);
    if(a[mid] === target){
      return mid;
    }
    else if(target > a[mid]){
      low = mid + 1;
    }
    else{
      high = mid - 1;
    }
  }
  
  return -1; 
}

let a = [1,2,3,5,9,12];
let target = 9;
let n = a.length;

let res = binarySearch();
console.log(res);