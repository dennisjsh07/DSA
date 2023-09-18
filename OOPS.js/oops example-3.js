class Employee
{
    constructor(name,year,address)
    {
       this.name=name; 
       this.year=year;
       this.address=address;
    }
   print_details()
   {
       console.log(this.name,this.year,this.address);
      
   }
}
var t=new Employee("ram",1992,"Bangalore");
t.print_details();

var x=new Employee("shyam",2010,"Lucknow");
x.print_details();

var y=new Employee("babu_rao",2015,"Delhi");
y.print_details();
console.log( );


// if one of the employee is not initialised.
class employee
{
  constructor(name="dennis",year=1996,address="kudlu")
  {
    this.name=name;
    this.year=year;
    this.address=address;
  }
  print_details()
  {
    console.log(this.name,this.year,this.address);
  }
}
var a=new employee("swami",2000,"kudlu");
a.print_details();
var b=new employee("krishna",1998,"patna");
b.print_details();
var c=new employee();
c.print_details();

// using getInfo method.
class employee
{
  getInfo(name="swami",year_of_joining=2022,address="andhra")
  {
    this.name=name;
    this.year_of_joining=year_of_joining;
    this.address=address;
  }
  print_details()
  {
    console.log(this.name,this.year_of_joining,this.address);
  }
}
var a=new employee();
var b=new employee();
var c=new employee();

a.getInfo("dennis",2020,"bangalore");
b.getInfo("alex",2021,"coimbatore");
c.getInfo();

a.print_details();
b.print_details();
c.print_details();