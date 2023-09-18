// using for loop.
var i=1;
while(i<=10)
{
  var str="";
  var j=10;
  while(j<=15-i)
  {
    str=str+"*";
    j=j+1;
  }
  while(j<=i+4)
  {
    str=str+"*";
    j=j+1;
  }
  console.log(str);
  i=i+1;
}