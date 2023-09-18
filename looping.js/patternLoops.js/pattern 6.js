for(i=1;i<=5;i++)
{
  var str="";
  for(j=1;j<=i;j++)
  {
    str=str+"*";
  }
  for(j=1;j<=5-i;j++)
  {
    str=str+"-";
  }
  for(j=1;j<=i;j++)
  {
    str=str+"*";
  }
  console.log(str);
}