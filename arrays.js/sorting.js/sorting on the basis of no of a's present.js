var a=["vaibhav", "almanac" , "is" ,"fat", "button","aabaca"];
var b=[];
for(i=0;i<a.length;i++)
{
  var count=0;
  for(j=0;j<a[i].length;j++)
  {
    if(a[i][j]=="a")
    {
      count=count+1;
    }
  }b.push(count);
}
console.log(b);
console.log( )
for(i=0;i<a.length-1;i++)
{
  for(j=0;j<a.length-1-i;j++)
  {
    if(b[j+1]>b[j] || (b[j+1]==b[j] && a[j+1].length>a[j].length))// edge case condition.
    {
      var temp=b[j+1];
      b[j+1]=b[j];
      b[j]=temp;
      
      var temp=a[j+1];
      a[j+1]=a[j];
      a[j]=temp;
    }
  }
} console.log(b);
console.log(a);