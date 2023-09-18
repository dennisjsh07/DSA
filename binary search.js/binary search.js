var a=[1,2,3,5,9,12];
var key=9;
var low=0;
var high=a.length-1;
var flag=false
while(low<=high)
{
var mid=Math.floor((low+high)/2);
if(a[mid]==key)
{
  console.log(mid);
  flag=true;
  break;
}
else if(key<a[mid])
{
  high=mid-1; 
}
else
{
  low=mid+1;
}
}
if(flag==false)
{
  console.log(-1);
}