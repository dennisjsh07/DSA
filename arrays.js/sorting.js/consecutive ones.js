let nums = [1,0,1,1,0,1];
  
let max = nums[0];

let i = 0;
let j = 0;
let count = 0;
while(i<nums.length){
  if(nums[i] === 1 && nums[j] === 1){
    count++;
    i++
  } else{
    count = 0;
    j = i+1;
    i++;
  }
  if(count>max){
    max = count;
  }
}
console.log(max);