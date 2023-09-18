class car 
{
  constructor(c,s,ty)
  {
    this.colour=c;
    this.speed=s;
    this.tyre=ty;
  }
 print_attributes()
 {
   console.log(this.colour);
   console.log(this.speed);
   console.log(this.tyre);
 }
 colculate_speed(time=60)
 {
   return this.speed*time;
 }
}
var car_1=new car("red",100,4);
car_1.print_attributes()
console.log(car_1.colculate_speed()) // calling that particular function.
console.log( );

var car_2=new car("white",120,4);
car_2.print_attributes();
console.log(car_2.colculate_speed())
console.log( );

var car_3=new car("black",150,4);
car_3.print_attributes();
console.log(car_3.colculate_speed())
console.log( );


// using constructors;
class A
{
  constructor(c,d)
  {
    this.c=c;
    this.d=d;
  }
  display()
  {
    console.log(this.d);
    console.log("A is your class");
  }
}
class B extends A
{
  constructor(a,b,c,d)
  {
    super(c,d) // for referring parent constructor.
    this.a=a;
    this.b=b;
  }
  hello()
  {
  console.log("B is your class");
  }
  display()
  {
    super.display(); //(over writing the local function to access parent function).
    console.log("B is your class");
  }
}
var b=new B(1,2,3,4);
b.display();


/// notes :- in polymorphism function over loading does not exists, but function over writing exists.

