// step-1 - find all the sub arrays
// step-2 apply if condition for odd length;
var a=[1,4,2,5,3];
var max_sum=0;
for(i=0;i<a.length;i++)
{
  for(j=i;j<a.length;j++)
  {
    if(((j-i)+1)%2!=0)
    {
    var str=""
    var sum=0;
    for(k=i;k<=j;k++)
    {
      str=str+(a[k]);
      sum=sum+a[k];
    }
    console.log(str+"-->"+sum);
    max_sum=max_sum+sum;
    }
  }
}console.log("max sum is -->"+max_sum);

// time complexity O(n3);
// space complexty O(1);


//////////////////////////////////////////////////////

var a=[1,4,2,5,3];
var max_sum=a[0];
for(i=0;i<a.length;i++)
{
  var prev_sum=0;
  for(j=i;j<a.length;j++)
  {
  prev_sum=prev_sum+a[j];
  if((j-i+1)%2!=0)
  {
  console.log(prev_sum);
  if(prev_sum>max_sum)
  {
    max_sum=prev_sum;
  }
  }
  }
}
console.log(`max sum is ${max_sum}`);

