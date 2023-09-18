var a=[[1,2],[1,2,3],[1,2,3,4]];
var maxSum=0;
for(i=0;i<a.length;i++)
{
  var str="";
  var sum=0;
  for(j=0;j<a[i].length;j++)
  {
    str=str+a[i][j];
    sum=sum+a[i][j];
  }
  console.log(str+"-->"+sum);
  if(sum>maxSum)
  {
    maxSum=sum;
  }
}
console.log(maxSum);

// time complexity O(n2);
// space complexty O(1);