// approach using stacks. (non cyclic).
var a=[5,9,6,4,17,75,50,60,70,80];
var ans=[];
var stack=[];
for(i=a.length-1;i>=0;i--)
{ 
  // step-1 : pop the stack.
  while(stack.length!=0 && stack[stack.length-1]<a[i])
  {
    stack.pop();
  }
  
  // step-2 : update ans.
  if(stack.length==0)
  {
    ans[i]=-1;
  }
  else
  {
    ans[i]=stack[stack.length-1];
  }
  
  //final step : push the stack.
  stack.push(a[i]);
  
}
console.log(ans);

// time complexity = O(n);
// space complexity= O(n);



// approach using stacks.(cyclic)
var a=[5,9,6,4,17,75,50,60,90,80];
var ans=[];
var stack=[];
var n=a.length;
for(i=2*(n-1);i>=0;i--)
{
  // step-1 : pop the stack.
  while(stack.length!=0 && stack[stack.length-1]<=a[i%n])
  {
    stack.pop();
  }
  
  // step-2 : update ans.
  if(i<n) // if we do not give this condition the answer will be given 2*times.
  {
  if(stack.length==0)
  {
    ans[i]=-1;
  }
  else
  {
    ans[i]=stack[stack.length-1];
  }
  }
  
  //final step : push the stack.
  stack.push(a[i%n]);
  
}
console.log(ans);