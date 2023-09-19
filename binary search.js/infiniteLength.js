var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var target = 15;
var low = 0;
var high = 1;

while(target>high){
  var temp = low;
  low = high + 1;
  high = (high-temp+1)*2;
}

// console.log(low, high);
var flag = false;
while(low<=high){
  var mid = Math.floor((low+high)/2);
  if(a[mid] === target){
    console.log(mid);
    flag = true;
    break;
  } else if(target<a[mid]){
    high = mid-1;
  } else{
    low = mid+1;
  }
}
if(flag === false){
  console.log(-1);
}
