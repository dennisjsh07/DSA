var a=[1,2,3,4,5];
i=0;
while(i<a.length)
{
    j=i;
    while(j<a.length)
    {
        k=i; //(k loop is used to print all the elemnets between i & j).
        while(k<=j)
        {
            console.log(a[k]);
            k=k+1;
        }
        console.log( );
        j=j+1;
    }
    i=i+1;
}
console.log(" using for loop");
console.log( );
var a=[1,2,3,4,5];
for(i=0;i<a.length;i++)
{
    for(j=i;j<a.length;j++)
    {
        for(k=i;k<=j;k++)
        {
            console.log(a[k]);
        } 
        console.log( );
    }
}

