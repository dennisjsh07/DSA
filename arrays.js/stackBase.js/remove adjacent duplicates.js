var a="abbaca";
var stack=[];
for(i=0;i<a.length;i++)
{
  if(stack.length==0)
  {
    stack.push(a[i]);
  }
  else if(stack[stack.length-1]==a[i])
  {
    stack.pop();
  }
  else
  {
    stack.push(a[i]);
  }
  
}
console.log(stack);
var str=""
for(i=0;i<stack.length;i++)
{
  str=str+stack[i];
}
console.log(str);

// time complexity - O(n);
// space complexity - (n);