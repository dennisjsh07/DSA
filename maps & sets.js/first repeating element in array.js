// 1) normal way -O(n^2)
var a=[1,5,3,4,3,5,6];
var count=0;
index=0;
for(i=0;i<a.length;i++)
{
  for(j=0;j<a.length;j++)
  {
    if(a[i]==a[j])
    {
      count=count+1;
    }
  }
  console.log(a[i]+"-->"+count);
  if(count>1)
  {
    index=i;
    break;
  }
}
console.log(index);

// 2) using hash function.
var a=[1,2,3,4,3,5,6];
var index=0;
var b=new Map();
for(i=0;i<a.length;i++)
{
  if(b.get(a[i])==undefined)
  {
    b.set(a[i],1);
  }
  else
  {
    b.set(a[i],b.get(a[i])+1)
  }
}
console.log(b);
for(i=0;i<a.length;i++)
{
if(b.get(a[i])>1)
{
  index=i;
  console.log(a[i]);
  console.log(index);
  break;
}
}

// find the max frequency.
var a=[5,3,5,9,5,3, 2,1];
var b=new Map();
for(i=0;i<a.length;i++)
{
if(b.get(a[i])== undefined)
{
  b.set(a[i],1);
}
else
{
  b.set(a[i],b.get(a[i])+1);
}
}
console.log(b);
var max=0;
for(i=0;i<a.length;i++)
{
  if(b.get(a[i])>max)
  {
    max=a[i];
  }
}
console.log(max);




