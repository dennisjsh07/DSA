var n=10;   //00000000000000000000000000001011
var count=0;
for(i=0;i<31;i++)
{
if(((n>>i)&1)==1)
{
    count=count+1;
}
}
console.log(count);