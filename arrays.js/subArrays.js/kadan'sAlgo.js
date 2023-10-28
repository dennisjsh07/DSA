function kadansAlgo(){
    let sum = nums[0];
    let maxSum = nums[0];
    for(i = 0; i<nums.length; i++){
      if(sum + nums[i] > nums[i]){
        sum += nums[i];
      } else{
        sum = nums[i];
      }
      
      if(sum > maxSum){
        maxSum = sum;
      }
    }
    
    console.log(maxSum);
  }
  
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  kadansAlgo();