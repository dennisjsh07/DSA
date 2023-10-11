function nextGreaterElement(a){
    let stack = [];
    let ans = [];
    for(i = a.length-1; i>=0; i--){
      while(stack[stack.length-1] <= a[i]){
        stack.pop();
      }
      
      if(stack.length === 0){
        ans[i] = -1;
      } else{
        ans[i] = stack[stack.length-1];
      }
      
      stack.push(a[i]);
    }
    
    return ans;
  }
  
  function nextGreaterElement1(a,b,c){
    let ans = [];
    
    for(i = 0; i<a.length; i++){
      for(j = 0; j<b.length; j++){
        if(a[i] === b[j]){
          ans[i] = c[j];
        }
      }
    }
    console.log(ans);
  }
  
  let nums1 = [4,1,2];
  let nums2 = [1,3,4,2];
  
  let nge = nextGreaterElement(nums2);
  // console.log(nge);
  nextGreaterElement1(nums1, nums2, nge);
  