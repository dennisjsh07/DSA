var a = 1634;
var temp = a;
var noOfDigits = a.toString().length;
// console.log(noOfDigits);
var sum = 0;
while(a>0){
  var x = a%10;
  // console.log(x);
  var y = Math.pow(x, noOfDigits);
  // console.log(y)
  sum = sum + y;
  a = Math.floor(a/10);
}

console.log(sum);

if(sum === temp){
  console.log(`${temp} is armstrong`)
} else{
  console.log(`${temp} is not armstrong`)
}