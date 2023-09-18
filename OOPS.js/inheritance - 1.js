class shape
{
  print_shape()
  {
   console.log("this is shape"); 
  }
}
class rectangle extends shape
{
  print_shape()
  {
    super.print_shape();
    console.log("this is rectangle");
  }
}
class circle extends shape
{
  print_shape()
  {
    console.log("this is circle");
  }
}
class square extends rectangle
{
  printSquare()
  {
    super.print_shape();
    console.log("square is a rectangle");
  }
}
var a=new square();
a.printShape();
