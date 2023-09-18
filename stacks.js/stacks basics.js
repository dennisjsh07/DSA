//  1) create an empty stack.

class stack
{
  constructor()
  
  {
    this.stack=[];
  }
}
var a=new stack();


// 2) push elements inside the stack.
class stack
{
  constructor()
  {
    this.stack=[];
  }
  
  push(ele)
  {
    this.stack.push(ele)
  }
}
var b=new stack();
b.push(1);
b.push(2);
b.push(3);
b.push(4);
b.push(5);

console.log(a);


// 3) POP elements from the stack.
class stack
{
  constructor()
  {
    this.stack=[];
  }
  
  push(ele)
  {
    this.stack.push(ele)
  }
  
  pop()
  {
    this.stack.pop();
  }
  
}
var c=new stack();
c.push(1);
c.push(2);
c.push(3);
c.push(4);
c.push(5);

c.pop();

console.log(c);


//4) find the peak element or the top most element.
class stack
{
  constructor()
  {
    this.stack=[];
  }
  
  push(ele)
  {
    this.stack.push(ele)
  }
  
  pop()
  {
    this.stack.pop();
  }
  
  peak()
  {
    return this.stack[this.stack.length-1];
  }
  
}
var d=new stack();
d.push(1);
d.push(2);
d.push(3);
d.push(4);
d.push(5);

d.pop();


console.log(d);
console.log(d.peak());


//5) find if the stack isEmpty.
class stack
{
  constructor()
  {
    this.stack=[];
  }
  
  push(ele)
  {
    this.stack.push(ele)
  }
  
  pop()
  {
    this.stack.pop();
  }
  
  peak()
  {
    return this.stack[this.stack.length-1];
  }
  
  isEmpty()
  {
    if(this.stack.length==0)
    {
      return (true);
    }
    return false;
  }
  
}
var e=new stack();
e.push(1);
e.push(2);
e.push(3);
e.push(4);
e.push(5);

e.pop();


console.log(e);
console.log(e.peak());
console.log(e.isEmpty());