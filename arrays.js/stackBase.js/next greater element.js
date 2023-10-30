// non cyclic array: resource: scalar
var a=[1,2,4,5,3];
var ans=[];
for(i=0;i<a.length;i++)
{
  var flag=false;
  for(j=i+1;j<a.length;j++)
  {
    if(a[j]>a[i])
    {
      ans[i]=a[j];
      flag=true;
      break;
    }
  }
  
  if(flag==false)
  {
    ans[i]=-1;
  }
}
console.log(ans);

// time complexity = O(n2);
// space complexity= O(1);



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

// time complexity = O(n);
// space complexity= O(n); for the stack we do not compute for the ans generaly.