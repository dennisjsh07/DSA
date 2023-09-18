var pushed = [1,2,3,4,5];
var popped = [4,5,3,2,1];
var stack=[];
var j=0;
for(i=0;i<pushed.length;i++)
{
  stack.push(pushed[i]);
  while(stack[stack.length-1]==popped[j] && stack.length!=0)
  {
    stack.pop();
    j++;
  }
}
if(stack.length==0)
{
  console.log("valid");
}
else
{
  console.log("invalid");
}

// time complexity =O(n);
// space complexity =O(n);