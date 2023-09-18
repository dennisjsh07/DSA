// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

var a = ["x","x","y","y"];
var target ='z';

var low = 0;
var high = a.length-1;

while(low<=high){
  var mid = Math.floor((low+high)/2);
  
if(target >= a[mid]){
    low = mid+1;
  } else{
    high = mid - 1
  }
}

if(low === a.length){
  console.log(a[0]);
} else{
  console.log(low);
}