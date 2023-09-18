// Create a class named 'Member' having the following attributes:
//Data Attributes of Member Class
//1 - Name
//2 - Age
//3 - Phone number
//4 - Address
//5 - Salary
//It also has a method named 'printSalary' which prints the salary of the members.
//Two classes 'Employee' and 'Manager' inherits the 'Member' class. The 'Employee' and 'Manager' classes have attributes 'specialization' and 'department' respectively.
//Both these classes will also have a method print_details.
//Print_details of Employee class will print name & 'specialization' and will also call the printSalary method.
//Print_details of Manager class will print name & 'department' and will also call the printSalary method.
//Now, assign name, age, phone number, address and salary to an employee and a manager by making an object of both of these classes.
//and print the same.

// solution.
class Member
{
  constructor(Name,Age,Phone_number,Address,Salary)
  {
    this.Name=Name;
    this.Age=Age;
    this.Phone_number=Phone_number;
    this.Address=Address;
    this.Salary=Salary;
  }
  printSalary()
  {
    console.log(this.Salary);
  }
  
}
class Employee extends Member
{
  constructor(Name,Age,Phone_number,Address,Salary,specialization)
  {
    super(Name,Age,Phone_number,Address,Salary)
    this.specialization=specialization;
      }
  print_details()
  {
    console.log(this.Name);
    console.log(this.specialization);
    super.printSalary()
  }
}

class Manager extends Member
{
  constructor(Name,Age,Phone_number,Address,Salary,department)
  {
    super(Name,Age,Phone_number,Address,Salary);
    this.department=department;
  }
  print_details()
  {
    console.log(this.Name);
    console.log(this.department);
    super.printSalary();
  }
}

var obj = new Employee("Ram",25,"7003","Bangalore",1000,"cse");
obj.print_details();

var obj1 = new Employee("Shyam",250,"8098","Chennai",2000,"civil");
obj1.print_details();

var obj_Man = new Manager("babu",100,"1234","Bangalore",1000,"JP");
obj_Man.print_details();

var obj1_Man = new Manager("Rao",250,"456","Kerala",3000,"GC");
obj1_Man.print_details();

