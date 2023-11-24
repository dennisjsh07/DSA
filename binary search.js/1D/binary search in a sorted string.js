function nextGreaterElement(){
  let low = 0;
  let high = arr.length-1;
  while(low <= high){
    let mid = Math.floor((low+high)/2);
    if(arr[mid] > target){
      return arr[mid];
    } 
    else if(target == arr[mid]){
      low = mid+1;
    }
    else{
      high = mid-1;
    }
  }
  
  return arr[0];
}

var arr = ["x","x","y","y","z"];
var target = 'y';

const res = nextGreaterElement();
console.log(res);

