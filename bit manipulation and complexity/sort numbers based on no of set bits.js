// step-1 - count the number of set bits.
var a=[7,6,4,3,9,2];
var b=[];
for(i=0;i<a.length;i++)
{
  var count=0;
  for(j=0;j<32;j++)
  {
    if(((a[i]>>j)&1)==1)
    {
      count=count+1;
    }
  }
    b.push(count);
    console.log(a[i]+"-->"+b[i]);
}
console.log(a);
console.log(b);
// step-2 use bubble sort to sort.
for(i=0;i<a.length-1;i++)
{
  for(j=0;j<a.length-1-i;j++)
  {
    if(b[j]>b[j+1] || b[j]==b[j+1] && a[j]>a[j+1]) // when two numbers are same.
    {
      var temp=b[j];
      b[j]=b[j+1];
      b[j+1]=temp;
      
      temp=a[j];
      a[j]=a[j+1];
      a[j+1]=temp;
    }
  } 
}
for(i=0;i<a.length;i++)
{
  console.log(a[i]+"-->"+b[i]);
}
