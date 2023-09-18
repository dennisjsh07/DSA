// time complexiy = O(n^2)
var nums=[2,7,11,15];
var target=18;
var ans=[-1,-1]
for (i = 0; i < nums.length; i++) 
{
    var a = nums[i];
    var b = target - a;
  for (let j =0; j < nums.length; j++) 
  {
      if (nums[j] === b)
      {
       ans[0]=nums.indexOf(b); // for values ans[0]=(b);
       ans[1]=nums.indexOf(a); // for values ans[1]=(a);
      }
  }
}
console.log(ans);
console.log( ); 

// time complexity = O[n].

var key=13;
var c=new Set();
for(i=0;i<nums.length;i++)
{
  var b=nums[i];
  var a=key-b;
  if(c.has(a))
  {
    console.log(a,b)
  }
  else
  {
    c.add(b)
  }
  
}
