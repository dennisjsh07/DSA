function stockSpan(a){
  let stack = [];
  let nge = [];
  
  for(i = 0; i<a.length; i++){
    while(a[stack[stack.length-1]] <= a[i]){
      stack.pop();
    }
    
    if(stack.length === 0){
      nge[i] = -1;
    } else{
      nge[i] = stack[stack.length-1];
    }
    
    stack.push(i);
  }
  
  // console.log(nge);
  let ans = [];
  for(i = 0; i<nge.length; i++){
    ans[i] = i - nge[i];
  }
  
  console.log(ans);
}

let s = [100, 80, 60, 70, 60, 75, 85];

stockSpan(s);