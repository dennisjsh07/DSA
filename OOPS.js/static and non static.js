class car 
{
  
}
car.company="hyundai"; // static variable.

var car_1=new car() //object
car_1.colour="red";
console.log(car_1.colour);
// where as if we try to access the static attribute.
car.company="hyundai"; // static attribute.
var car_1=new car()
car_1.colour="red";
console.log(car_1.company); //it will show error/undefined
console.log( );




// if i want my fixed static variable in my object.
class vehicle 
{
  print_attributes()
  {
    console.log(vehicle.company);
    console.log(this.colour);
  }
}
vehicle.company="hyundai";

var obj_1=new vehicle()
obj_1.colour="red";
obj_1.print_attributes(); // here i'm calling my static object under dynamic objec.
console.log( );




// another way of initialising static objects is by.
class bikes
{
    static company="KTM";
    print_details()
    {
      console.log(bikes.company);
      console.log(this.colour);
    }
    
  }
  //vehicle.company="hyundai"; (if this is given this will overwrite the initialosation given under class)
  
  var obj_2=new bikes()
  obj_2.colour="red";
  obj_2.print_details()


