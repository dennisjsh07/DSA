class A
{
  display()
  {
    console.log("A is your class");
  }
}
var a=new A();
a.display();
console.log( );

// defining 2 classes 

class A
{
  display()
  {
    console.log("A is your class");
  }
}
class B extends A //(extends is the keyword to refer to the first function).
{
  hello()
  {
  console.log("B is your class");
  }
}
var b=new B();
b.display();
console.log( );

// if the function is present in B itself.
class A
{
  display()
  {
    console.log("A is your class");
  }
}
class B extends A
{
  hello()
  {
  console.log("B is your class");
  }
  display()
  {
    console.log("B is your class");
  }
}
var b=new B();
b.display();
console.log( );


// function is present in B but we want to refer A.

class A
{
  display()
  {
    console.log("A is your class");
  }
}
class B extends A
{
  hello()
  {
  console.log("B is your class");
  }
  display()
  {
    super.display(); // A will get checked first and then B.
    console.log("B is your class");
  }
}
var b=new B();
b.display();
console.log( );



// using constructors;
class a 
{
  constructor(c,d)
  {
   this.c=c;
   this.d=d;
  }
  
  display()
  {
    console.log("A is your class");
  }
}

class b extends a
{
  constructor(a,b,c,d)
  {
    super(c,d);
    this.a=a;
    this.b=b;
  }
  display()
  {
    super.display();
    console.log("B is your class");
  }
  
  hello()
  {
    console.log("b is your class");
  }
}

var e=new b(1,2,3,4);
e.display();


/// notes :- in polymorphism function over loading does not exists, but function over writing exists.