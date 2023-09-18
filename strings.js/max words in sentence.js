var a=["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
var max_count=0;
for(i=0;i<a.length;i++)
{
  var str="";
  var count=1;
  for(j=0;j<a[i].length;j++)
  {
    str=str+(a[i][j]);
    if(a[i][j]==" ")
    {
      count=count+1;
    }
  }
  console.log(str+"-->"+count);
  if(count>max_count)
  {
    max_count=count;
  }
}
console.log("max count is = "+max_count);