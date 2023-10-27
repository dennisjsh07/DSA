function peakValue(a){
  let low = 0;
  let high = a.length-1;
  
  while(low<=high){
    let mid = Math.floor((low+high)/2);
    
    if((mid === low || a[mid]>a[mid-1]) && (mid === high || a[mid]>a[mid+1])){
      return a[mid];
      break;
    }
    else if(mid>low && a[mid-1]>a[mid]){
      high = mid-1
    }
    else{
      low = mid+1;
    }
  }
}

function firstHalf(a){
  let low = 0;
  let high = peak;
  
  while(low<=high){
    var mid = Math.floor((low+high)/2);
    
    if(a[mid] === target){
      return mid;
      break;
    } 
    else if(target<a[mid]){
      high = mid - 1;
    }
    else{
      low = mid + 1;
    }
  }
  
  return -1;
}

function secondHalf(a){
  let low = peak;
  let high = a.length-1;
  
  while(low<=high){
    var mid = Math.floor((low+high)/2);
    
    if(a[mid] === target){
      return mid;
      break;
    } 
    else if(target<a[mid]){
      high = mid - 1;
    }
    else{
      low = mid + 1;
    }
  }
  
  return -1;
}

let arr = [0,1,2,4,2,1];
let target = 3;

let peak = peakValue(arr);
// console.log(peak);
let firstIndex = firstHalf(arr);
// console.log(firstIndex);
let secondIndex = secondHalf(arr);
// console.log(secondIndex);

if(firstIndex !== -1){
  console.log(firstIndex);
}
else if(secondIndex !== -1){
  console.log(secondIndex);
}
else{
  console.log(-1);
}