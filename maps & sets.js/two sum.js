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

// optimal soln

function twoSum(){
  let i = 0;
  let j = n-1;
  let ans = [-1, -1];
  while(i < j){
    let sum = nums[i] + nums[j];
    if(sum === target){
      ans[0] = nums[i];
      ans[1] = nums[j];
      return ans;
    }
    else if(target < sum){
      j--;
    }
    else{
      i++;
    }
  }
  
}

let nums = [2,7,11,15];
let target = 22;
let n = nums.length;

let res = twoSum();
console.log(res);

