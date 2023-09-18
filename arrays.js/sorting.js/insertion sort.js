var a=[5,2,1,4,7,8,3];
for(i=1;i<a.length;i++)
{
  var temp=a[i];
  var j=i-1;
  while(j>=0)
  {
    if(temp>a[j])
    {
    var temp=a[j+1];
    a[j+1]=a[j];
    a[j]=temp;
    }
    j=j-1;
  }
  
}console.log(a);
