var s="()[]{}"
var stack=[];
for(var i=0;i<s.length;i++)
{
  if(stack.length==0)
  {
    stack.push(s[i]);
  }
  else if((stack[stack.length-1]=="(" && s[i]==")")||
  (stack[stack.length-1]=="{" && s[i]=="}")||
  (stack[stack.length-1]=="[" && s[i]=="]"))
  {
    stack.pop();
  }
  else
  {
    stack.push(s[i]);
  }
}

if(stack.length==0) 
{
console.log(true);
}
else
{
console.log(false);
}

// time complexity =O(n);
// space complexity =O(n);