// 1) brute force approach...
// TC = O(n2)
// SC = O(1)
function greatestWithinWindow(a){
    let ans = [];
    
    for(i = 0; i<a.length-k; i++){
      let max = a[i];
      for(j = i+1; j<k+i; j++){
        if(a[j] > max){
          max = a[j];
        }
      }
      ans.push(max);
    }
    
    return (ans);
  }
  
  const arr = [1,3,-1,-3,5,3,6,7];
  let k = 3;
  
  let ans = greatestWithinWindow(arr);
  console.log(ans);
  
  