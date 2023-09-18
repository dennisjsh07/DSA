var a=[1,3,5,7,9]
var b=[];
var key=5;
for(i=0;i<a.length;i++)
{
  var d=Math.abs(key-a[i]);
  console.log(a[i]+"-->"+d);
  b.push(d);
}
console.log(b);
for(i=0;i<a.length-1;i++)
{
  for(j=0;j<a.length-1-i;j++)
  {
    if(b[j+1]<b[j])
    {
      var temp=b[j+1];
      b[j+1]=b[j];
      b[j]=temp;
      
      var temp=a[j+1];
      a[j+1]=a[j];
      a[j]=temp;
      
    }
  }
  }
  console.log(b);
  for(i=0;i<a.length;i++)
{
  console.log(a[i]+"-->"+b[i]);
}