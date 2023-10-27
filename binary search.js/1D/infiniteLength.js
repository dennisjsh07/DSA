function findExtremes(a){
  let low = 0;
  let high = 1;
  let ans = [];
  while(a[high] < target){
    low = high+1;
    high = high*2;
  }
  ans[0] = low;
  ans[1] = high;
  
  return ans;
}

function searchElement(a){
  while(low<=high){
    let mid = Math.floor((low+high)/2);
    
    if(a[mid] === target){
      return mid;
      break;
    }
    else if(target < a[mid]){
      high = mid - 1;
    }
    else{
      low = mid + 1;
    }
  }
  
  return -1
}

var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
target = 15;
// console.log(findExtremes(arr));

let ans = findExtremes(arr);
let low = ans[0];
let high = ans[1];

console.log(searchElement(arr));

