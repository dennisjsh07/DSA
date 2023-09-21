class string
{
  constructor()
  {
    this.stack=[];
  }
  
  push(ele)
  {
   if(this.stack.length==0) 
   {
     this.stack.push(ele)
   }
   else if((this.stack[this.stack.length-1] == "(" && ele ==")") ||
   (this.stack[this.stack.length-1] == "[" && ele =="]") ||
   (this.stack[this.stack.length-1] == "{" && ele =="}"))
   {
     this.stack.pop();
   }
   
  }
  
  length()
  {
    return this.stack.length;
  }
  
  isEmpty()
  {
    if(this.stack.length==0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
var a=new string();
a.push("[");
a.push("{")
a.push("}")
a.push(")")
a.push("(")
a.push("]")
console.log(a.stack);
console.log(a.isEmpty());
console.log(a.length());