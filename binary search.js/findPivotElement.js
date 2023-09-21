var a = [4,5,6,7,0,1,2];
var target = 3;

var low = 0;
var high = a.length-1;
var flag = false
while(low<=high){
  var mid = Math.floor((low+high)/2);
  if(a[mid] > a[mid+1]){ // important condition...
    console.log(a[mid]);
    flag = true
    break;
  } else if(a[low]<=a[mid]){
    if(target>=a[low] && target<a[mid]){
      high = mid-1;
    } else{
      low = mid+1;
    }
  } else if(a[mid]<=a[high]){
    if(target>a[mid] && target<=a[high]){
      low = mid+1;
    } else{
      high = mid-1;
    }
  }
}

if(flag === false){
  console.log(-1);
}