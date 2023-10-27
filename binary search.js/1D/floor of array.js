// floor is the number which is <= the key.
var a=[2,3,5,9,14,16,18];
var key=17;
// in this array if the array does not contain 17 then return element < than 17 i.e, 16;
var low=0;
var high=a.length-1;
var flag=false;
while(low<=high)
{
var mid=Math.floor((low+high)/2);
if(a[mid]==key)
{
  console.log(a[mid]);
  flag=true;
  break;
}
else if(key>a[mid])
{
  low=mid+1;
}
else
{
  high=mid-1
}
}
if(flag==false)
{
  console.log(a[high]);
}
