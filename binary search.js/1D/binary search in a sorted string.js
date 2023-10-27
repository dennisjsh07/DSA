function greaterElement(a){
  let low = 0;
  let high = a.length-1;
  while(low<=high){
    var mid = Math.floor((low+high)/2);
    
    if(target>=a[mid]){
      low = mid+1;
    } else{
      high = mid-1;
    }
  }
  
  if(low === a.length){
    return a[0];
  } else{
    return a[low];
    }
}

var arr = ["x","x","y","y","z"];
var target = 'y';

console.log(greaterElement(arr));