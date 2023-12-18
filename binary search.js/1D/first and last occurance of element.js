var a=[5,7,7,8,8,10];
var key=8;
var ans=[-1,-1];
var low=0;
var high=a.length-1;
while(low<=high)
{
  var mid=Math.floor((low+high)/2);
if(a[mid]==key)
{
  ans[0 ]=(mid);
  high=mid-1;
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
var low=0;
var high=a.length-1;
while(low<=high)
{
  var mid=Math.floor((low+high)/2);
if(a[mid]==key)
{
  ans[1]=(mid);
  low=mid+1;
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
console.log(ans);