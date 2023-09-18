class PARENT
{
  print1()
  {
    console.log("this is a parent class");
  }
}
class CHILD extends PARENT
{
  print()
  {
    console.log("this is a child class");
  }
  
}
var obj_parent = new PARENT();
obj_parent.print1();

var obj_child = new CHILD();
obj_child.print();
obj_child.print1();
console.log( );


// or when the print methods are same.

class PARENT
{
  print()
  {
    console.log("this is a parent class");
  }
}
class CHILD extends PARENT
{
  print()
  {
    
       console.log("this is a child class");
       super.print();
  }
  
}
var obj_parent = new PARENT();
obj_parent.print();

var obj_child = new CHILD();
obj_child.print();
