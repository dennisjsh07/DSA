var a=[1,3,2,1];
var b=[];
for(i=1;i<=2;i++)
{
  for(j=0;j<a.length;j++)
  {
    b.push(a[j]);
  }
}
console.log(b);

// using concat...
var a=[1,3,2,1];
var b = a.concat(a);
console.log(b);

// using spread operator...
var a=[1,3,2,1];
var b = [ ...a, ...a];
console.log(b);