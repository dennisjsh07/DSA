var n=9;
var flag=true;
for(i=2;i<n;i++)
{
    if(n%i==0)
    {
        console.log("not prime");
        flag=false;
        
    }
}
    if(flag)
    {
        console.log("prime number");
    }
