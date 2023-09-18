var a="abcdabcgahjfa";
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
var str="";
for(i=0;i<a.length;i++)
{
  if(b.get(a[i])==1)
  {
    str=str+a[i];
  }
}
 
console.log(str);
console.log( );
// O(n) time complexity.

//normal method;

var a="abcdabcgahjfa";
var b=[];
for(i=0;i<a.length;i++)
{
  var count=0;
  for(j=0;j<a.length;j++)
  {
    if(a[i]==a[j])
    {
      count=count+1;
    }
  }
  console.log(a[i]+"-->"+count);
  if(count==1)
  {
    b.push(a[i]);
  }
}
console.log(b);
var str="";
for(i=0;i<b.length;i++)
{
  str=str+b[i];
}
console.log(str);