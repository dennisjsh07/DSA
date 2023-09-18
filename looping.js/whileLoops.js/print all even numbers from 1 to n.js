// print all even numbers upto n...
var n = 20;
var count = 0;
var i = 2;
while(count<n){
if(i%2 === 0){
  count++
  console.log(i+'-->'+count)
}
i++
}