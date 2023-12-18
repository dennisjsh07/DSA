//remove the duplicates and return the length...5

function removeElement(){
  let j = 0;
  
  for(i = 0; i<nums.length; i++){
    if(nums[i] !== val){
      nums[j] = nums[i];
      j++;
    }
  }
  
  return j;
}

let nums = [0,1,2,2,3,0,4,2];
let val = 2;

let result = removeElement();
console.log(result);