var a =  [[5, 2], [3, 5]];
var a =  [[5, 2], [3,5,5]];
var count=0;
for(i=0;i<a.length;i++)
{
  for(j=0;j<a[i].length;j++)
  {
    if(a[i][j]==5)
    {
      count=count+1;
    }
  }
}
console.log(count);