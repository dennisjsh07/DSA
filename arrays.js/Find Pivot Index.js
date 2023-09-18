var a=[1,7,3,6,5,6];
var total_sum=0;
var flag=false;
for(i=0;i<a.length;i++)
{
  total_sum=total_sum+a[i];
}
var right_sum=total_sum;
var left_sum=0;

for(i=0;i<a.length;i++)
{
  right_sum=right_sum-a[i];
  if(left_sum==right_sum)
  {
    console.log(i);
    flag=true;
  }
  left_sum=left_sum+a[i];
}
  if(flag==false)
{
console.log(-1);
}