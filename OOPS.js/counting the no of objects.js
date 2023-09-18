class count_objects
{
  static i=0;
  constructor()
  {
    count_objects.i=count_objects.i+1;
  }
}
var a = new count_objects();
var b = new count_objects();
var c = new count_objects();
var d = new count_objects();
var e = new count_objects();
console.log(count_objects.i);

// example 2.
class cars 
{
static count=0;
constructor()
{
cars.count=cars.count+1;
}
}
var car_1=new cars();
var car_2=new cars();
var car_3=new cars();
var car_4=new cars();
var car_5=new cars();
console.log(cars.count);
