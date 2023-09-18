


var nums=[1,2,3];
var result=[];
function dfs(i,nums)
{
  if(i==nums.length)
  {
    result.push(nums.slice());
    return 0;
  }
  
  for(let j=i;j<nums.length;j++)
  {
    [nums[i],nums[j]] = [nums[j],nums[i]];
    dfs(i+1,nums);
    [nums[i],nums[j]] = [nums[j],nums[i]];
  }
}
dfs(0,nums);
console.log(result);