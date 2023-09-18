var nums=[1,2,3];
var result=[];

function dfs(i,nums,slate)
{
  if(i==nums.length)
  {
    result.push(slate.slice());
    return 0;
  }
  
  //exclude condition;
  dfs(i+1,nums,slate);
  
  //include condition;
  slate.push(nums[i]);
  dfs(i+1,nums,slate);
  slate.pop();
}

dfs(0,nums,[]);
console.log(result);