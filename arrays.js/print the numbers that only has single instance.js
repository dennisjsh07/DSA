var a=[1,3,7,3,1,7,2,4,6,4,6];
for(i=0;i<a.length;i++)
{
  var count=0;
  for(j=0;j<a.length;j++)
  {
    if(a[i]==a[j])
    {
      count=count+1;
    }
  }
  if(count==1)
  {
    console.log(a[i]);
  }
}

/// note:- we are using count to find-
/// - the number of instances. 