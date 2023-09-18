// step-1 (SORT THE ARRAY).
var key=5;
var ans=[-1,-1];
for(i=0;i<nums.length-1;i++)
{
  for(j=0;j<nums.length-1-i;j++)
  {
    if(nums[j+1]<nums[j])
    {
      var temp=nums[j];
      nums[j]=nums[j+1];
      nums[j+1]=temp;
    }
  }
}
// STEP-2 INCREMENT i & j;
console.log(nums);
var i=0;
var j=1;
while(i<nums.length && j<nums.length)
{
  if(Math.abs(nums[j]-nums[i])==key)
  {
    ans[0]=nums[i];
    ans[1]=nums[j];
    break;
  }
  if(key<Math.abs(nums[j]-nums[i]))
  {
    j=j+1;
  }
  else
  {
    i=i+1;
  }
}
console.log(ans);

/// code link in youtube ///

// normal method.
var a=[5,2,3,80,5,20];
target=60;
var ans=[-1,-1];
for(i=0;i<a.length;i++)
{
  for(j=i+1;j<a.length;j++)
  {
    if(Math.abs(a[j]-a[i])==target)
    {
      ans[0]=a[i];
      ans[1]=a[j];
    }
  }
}
console.log(ans);