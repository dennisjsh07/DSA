let nums = [0,0,1,1,1,2,2,3,3,4];
let j = 0;
let i = j+1;

while(i<nums.length){
  if(nums[i]!==nums[j]){
    j++;
    nums[j] = nums[i];
    i++;
  } else{
    i++;
  }
}

console.log(j+1);

// youtube link:- https://www.youtube.com/watch?v=Fm_p9lJ4Z_8