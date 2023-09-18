// sort in descending order.[5,2,1,4,7,8,3]
var a=[5,2,1,4,7,8,3];
for(j=0;j<a.length-1;j++)
{
var max=a[j];
var index=j;
for(i=j+1;i<a.length;i++)
{
    if(a[i]>max)
    {
        max=a[i];
        index=i;
    }
}
var temp=a[j];
a[j]=a[index];
a[index]=temp;
}
console.log(a);

// find the max value.[5,2,1,4,7,8,3]

var a=[5,2,1,4,7,8,3];
var max=a[0];
for(i=0;i<a.length-1;i++)
{
    if(a[i]>max);
    {
        max=a[i];
    }
}
console.log(max);