var n=10;
var flag=1;
while (n>1)
{
var prev=n&1;
var curr=(n>>1)&1;
if(prev^curr==0)
{
  flag=0;
  console.log(false);
}
n=n>>1;
}
if(flag==1)
{
  console.log(true);
}