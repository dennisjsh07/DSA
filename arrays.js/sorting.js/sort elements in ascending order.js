// step-1 - write code to find the min value.
// step-2 - write code for swapping.
// step-3 - write code to for (n-1)times.




// 1) sort [5,6,2,9,-2] in ascending order.
var a=new Array(5,6,2,9,-2);
for(j=0;j<a.length-1;j++)
{
var min=a[j];
var index=j;
for(i=j+1;i<a.length;i++)
{
    if(a[i]<min)
    {
        min=a[i];
        index=i;
    }
    var temp=a[j];
    a[j]=a[index];
    a[index]=temp;
}
}
console.log(a);
console.log( );

// 2) sort [5,6,2,9,-2] find the min value.
var a=new Array(5,6,2,9,-2);
var min=a[0];
for(i=0;i<a.length;i++)
{
    if(a[i]<min)
    {
        min=a[i];
    }
}
console.log(min);