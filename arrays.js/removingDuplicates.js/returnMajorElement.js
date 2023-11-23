// max repeated element...
function majorityElement(){
  
    let a = new Map()
  
    for(let i = 0; i<nums.length; i++){
      if(a.get(nums[i]) === undefined){
        a.set(nums[i], 1);
      } else{
        a.set(nums[i], a.get(nums[i])+1);
      }
    }
    
    let max = 0;
    index = 0;
    for(let i = 0; i<nums.length; i++){
      console.log(nums[i]+'-->'+a.get(nums[i]))
      if(a.get(nums[i]) > max){
        max = a.get(nums[i]);
        index = i;
      }
    }
    
    console.log(nums[index]);
  }
  
  let nums = [3,3,4];
  majorityElement();