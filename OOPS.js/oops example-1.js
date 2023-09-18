class student
{
  constructor(name="john",roll_no=2)
  {
    this.name=name;
    this.roll_no=roll_no;
  }
  print_attributes()
  {
    console.log(this.name);
    
    console.log(this.roll_no)
  }
}
var x=new student("vaibhav",101);
x.print_attributes();

var y=new student("rahul",102);
y.print_attributes();

var z= new student();
z.print_attributes();
