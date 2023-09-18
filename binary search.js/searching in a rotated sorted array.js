var a=[4,5,6,7,0,1,2];
var target=0;
var low=0;
var high=a.length-1;
var flag=false;
while(low<=high)
{
var mid=Math.floor((low+high)/2);
if(a[mid]==target)
{
  console.log(mid);
  flag=true;
  break;
}
// find the sorted parts and then shift the index.
else if(a[low]<=a[mid])
{
  if((target>=a[low]) && (target<a[mid]))
  {
    high=mid-1;
  }
  else
  {
    low=mid+1;
  }
}
else if(a[mid]<=a[high])
{
  if((target>a[mid]) && (target<=a[high]))
  {
    low=mid+1;
  }
  else
  {
    high=mid-1;
  }
}
}
if(flag==false)
{
 console.log(-1);
}