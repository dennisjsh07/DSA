for(i=1;i<=10;i++)
{
  var  str="";
if(i<=5)
{
  for(j=1;j<=i;j++)
  {
    str=str+"*";
  }
}
else
  {
  for(j=1;j<=11-i;j++)
  {
    str=str+"*";
  }
  }
  console.log(str);
}