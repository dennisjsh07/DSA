  // step-1 : create empty stack.
  // step-2 : push elements into the stack
  // step-3 : create a min stack and push min ele inside
  // note:- push inside the min stack only if the ele is<prev ele inside min.

  class stack
  {
    constructor()
    {
      this.stack=[];
      this.min=[];
    }
    
    push(ele)
    {
      this.stack.push(ele); //pushing ele inside empty stack.
      if((this.min.length==0) || (ele<this.min[this.min.length-1]))
      {
        this.min.push(ele); //pushing ele inside min stack.
      }
    }
    
    stack_peek() //finding top element of stack.
    {
      return this.stack[this.stack.length-1];
    }
    
    stack_min() //finding the min element from min stack.
    {
      return this.min[this.min.length-1];
    }
  }
  
  var a=new stack();
  a.push(18);
  a.push(19);
  a.push(29)
  a.push(15)
  a.push(16)
  console.log(a);
  console.log(a.stack_min());
  
  
  