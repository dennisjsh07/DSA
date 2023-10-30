function circularSubArray(){
    let n = nums.length;
    
    let maxSum = 0;
    let globelMax = nums[0];
    
    let minSum = 0;
    let globalMin = nums[0];
    
    let totalSum = 0;
    for(let i = 0; i<n; i++){
      totalSum += nums[i];
    }
    // console.log(totalSum);
    
    for(let i = 0; i<n; i++){
      if(maxSum + nums[i] > nums[i]){
        maxSum += nums[i];
      } else{
        maxSum = nums[i];
      }
      
      if(maxSum > globelMax){
        globelMax = maxSum;
      }
    }
    // console.log(globelMax);
    
    for(let i = 0; i<n; i++){
      if(minSum + nums[i] > nums[i]){
        minSum = nums[i];
      } else{
        minSum += nums[i];
      }
      
      if(minSum < globalMin){
        globalMin = minSum;
      }
    }
    // console.log(globalMin);
    
    let circularSum = totalSum - globalMin;
    
    if(globelMax < 0){ // all negative condition
      return globelMax;
    } else{
      return circularSum > globelMax ? circularSum : globelMax;
    }
  }
  
  let nums = [5,-3,5];
  let result = circularSubArray();
  console.log(result);