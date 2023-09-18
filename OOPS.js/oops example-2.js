class Triangle
{
  constructor(s1=0,s2=0,s3=0)
  {
      this.side1=s1;
      this.side2=s2;
      this.side3=s3;
  }
  calculate_area()
  {
      return (this.side1*this.side2*this.side3);
  }
    calculate_perimeter()
  {
      return (this.side1+this.side2+this.side3);
  }
 }
var t=new Triangle(3,4,5);
console.log(t.calculate_area());
var per=t.calculate_perimeter();
console.log(per);
t=new Triangle(9,10,11);
console.log(t.calculate_area());
per=t.calculate_perimeter();
console.log(per);
console.log( );

// when one side is not initialised.
class triangle
{
  constructor(s1,s2,s3)
  {
    this.side_1=s1;
    this.side_2=s2;
    this.side_3=s3
  }
  calculate_area(side_3)
  {
    return (this.side_1*this.side_2*side_3)
  }
  calculate_perimeter(side_3)
  {
    return (this.side_1+this.side_2+side_3)
  }
}
var a=new triangle(5,5,5);
console.log(a.calculate_area(5));
console.log(a.calculate_perimeter(5));