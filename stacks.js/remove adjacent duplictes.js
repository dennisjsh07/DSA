class stack
{
  constructor()
  {
    this.stack=[];
  }
  
  push(ele)
  {
    if(this.stack.length==0)
    {
      this.stack.push(ele);
    }
    else if(this.stack[this.stack.length-1]==ele)
    {
      this.stack.pop();
    }
    else
    {
      this.stack.push(ele);
    }
  }
}
var a=new stack();
a.push("a");
a.push("b");
a.push("b");
a.push("a");
a.push("c");
a.push("a");
console.log(a);

// time complexity - O(n);
// space complexity - O(n);