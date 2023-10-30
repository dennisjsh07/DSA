function twoSum2(){
    let n = numbers.length;
    let i = 0;
    let j = n-1;
    let ans = [-1,-1];
    while(i<j){
      let sum = numbers[i] + numbers[j];
      if(sum === target){
        ans[0] = i+1;
        ans[1] = j+1;
        return ans;
      }
      else if(target < sum){
        j--
      }
      else{
        i++;
      }
    }
    
    return [];
  }
  
  let numbers = [2,7,11,15];
  let target = 9
  
  let result = twoSum2();
  console.log(result);
  