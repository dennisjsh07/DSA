// time complexity= O(n3)//
// space complexity= O(1)//

var a=[-6,-5,-6,-2,-3];
var max_sum=a[0];
for(i=0;i<a.length;i++)
{
    for(j=i;j<a.length;j++)
    {
        var str="";
        var sum=0;
        for(k=i;k<=j;k++)
        {
            str=str+a[k];
            sum=sum+a[k];
        }
        if(sum>max_sum)
        {
            max_sum=sum;
        }    
    } 
    console.log( )
}
console.log(max_sum);
console.log( );

// time complexity O(n2);
// space complexty O(1);
var a=[-6,-5,-6,-2,-3];
var max_sum=a[0];
for(i=0;i<a.length;i++)
{
    prev_sum=0;
    for(j=i;j<a.length;j++)
    {
        prev_sum=prev_sum+a[j];
       
        if(prev_sum>max_sum)
        {
            max_sum=prev_sum;
        }    
    } 
    console.log( )
}
console.log(max_sum);

//most optimal solution using kadan's algorithm.
//time complexity O(n);
//space complexity O(1);

var a=[-2,-3,4,-1,-2,1,5,-3];
var sum=0;
var max_sum=0;
//to print the sub arrays.
//var ans=[-1,-1]
for(i=0;i<a.length;i++)
{
    //if(sum === 0){
      //  ans[0]=i
      // }
  sum=sum+a[i];
  
  if(sum>max_sum)
  {
    max_sum=sum;
      //ans[1]=i
  }
  
  if(sum<0)
  {
    sum=0;
  }
}
if(max_sum>0)
{
  console.log(max_sum);
}
else
{
  console.log([]);
}
//console.log(ans);
//to print the sub array.
//for(i=ans[0];i<=ans[1];i++)
//{
//console.log(a[i]);
//}
