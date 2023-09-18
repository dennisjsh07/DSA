// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

var n=10;
var j=2;
var b=[];
var count=0;
while(j<n) // here the condition for number of iteration is given.
{
var flag=false;
for(i=2;i<j;i++)
{
  if(j%i==0)
  {
    flag=true;l
    break;
  }
}
if(flag==false)
{
  b.push(j);
  count++;
}
j++
}
console.log(b);
console.log(count);