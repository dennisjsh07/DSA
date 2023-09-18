// step -1 (program to find prime number)
var n=9;
var flag=true;
for(i=2;i<n;i++)
{
  if(n%i==0)
  {
    console.log("not a prime number");
    flag=false;
    break;
  }
 
}
if(flag)
{
  console.log("prime number");
}
console.log( );

// storing 1st 20 prime numbers
var n=2;
var a=[];
var count=0;
while(count<10)
{
var flag=true;
for(i=2;i<n;i++)
{
  if(n%i==0)
  {
       flag= false;
       break;
  }
}
if(flag)
{
  count=count+1;
  a.push(n);
}
n=n+1;
}
console.log(a);