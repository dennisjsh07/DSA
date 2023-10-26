// leetcode 189 (rotate array)...

function rotateArray(){
  
    // step 1: reverse the entire array...
    nums.reverse();
    
    // step 2: reverse first k elements...
    let i = 0;
    let j = k-1;
    while(i<j){
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
    
    // step 3: reverse remaining elements...
    i = k;
    j = nums.length-1;
    while(i<j){
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
    console.log(nums);
  }
   
  let nums = [1,2,3,4,5,6,7];
  let k = 3;
  rotateArray();
