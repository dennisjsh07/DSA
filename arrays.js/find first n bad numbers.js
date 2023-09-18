// A Bad Number is defined by a number which is divisible by sum of its digit.
// Example1 :- 12 -> Sum of digit (1+2) = 3. 12 is divisible by 3 therefore its a bad number
// Example2 :- 45 -> Sum of digit (4+5) = 9. 45 is divisible by 9 therefore its a bad number
// 11 is not a Bad (1+1 ) =2 Since 11 is not divisible by 2.

var n=10;
var b=[];
var count=0;
while(count<10)
{
var sum=0
var temp=n;
while(temp>0)
{
  var x=temp%10;
  sum=sum+(x);
  temp=Math.floor(temp/10);
}
if(n%sum==0)
{
  count=count+1;
  b.push(n);
}
n=n+1;
}
console.log(b);