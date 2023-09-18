class Employee
{
  getInfo(s=0,hrs=0)
  {
    this.salary=s;
    this.working_hours=hrs;
  }
  Addsal()
  {
    if(this.salary<500)
    {
      this.salary=this.salary+10;
    }
  }
  AddWork()
  {
    if(this.working_hours>6)
    {
      this.salary=this.salary+5;
    }
  }
}
var t=new Employee();
t.getInfo(400,7);
t.Addsal();
t.AddWork();
console.log(t.salary);
var x=new Employee();
x.getInfo(600,8);
x.Addsal();
x.AddWork();
console.log(x.salary);

console.log( );
// if not initialised.
class employee
{
  getinfo(salary,hrs)
  {
    this.salary=salary;
    this.hours=hrs;
  }
  add_sal()
  {
    if(this.salary<500)
    {
      this.salary=this.salary+10;
    }
  }
  add_work()
  {
    if(this.hours>6)
    {
      this.salary=this.salary+5;
    }
  }
  
}
var a=new employee();
a.getinfo(400,7)
a.add_sal();
a.add_work();
console.log(a.salary);