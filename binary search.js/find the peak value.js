var a=[1,2,1,3,5,6,4];
var low=0;
var high=a.length-1;
while(low<=high)
{
var mid=Math.floor((low+high)/2);
if(mid==low || a[mid]>a[mid-1] && mid==high || a[mid]>a[mid+1])
{
  console.log(a[mid]);
  break;
}
else if(mid>low && a[mid-1]>a[mid])
{
  high=mid-1;
}
else
{
  low=mid+1;
}
}



