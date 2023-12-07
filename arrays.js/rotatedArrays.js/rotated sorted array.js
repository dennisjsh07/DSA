// let nums = [3,4,5,1,2];
let nums = [1,2,3,4];
// let nums = [3,4,5,1,6];

let n = nums.length;
let count = 0;
for(i = 1; i<nums.length; i++){
  if(nums[i-1]>nums[i]){
    count++;
  }
}

if(nums[n-1]>nums[0]){
  count++;
}
console.log('count -->',count);
if(count<=1){
  console.log(true);
} else{
  console.log(false);
}

// youtube link:- https://www.youtube.com/watch?v=Z7_nMTHROZo