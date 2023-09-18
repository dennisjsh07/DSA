for(i=1;i<=10;i++)
{
  var str="";
  for(j=1;j<=6-i;j++)
  {
    str=str+"*";
  }
  for(j=1;j<=i-5;j++)
  {
    str=str+"*";
  }
  console.log(str);
}