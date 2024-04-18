function nextLesserELeLeft(a){
  let stack = [];
  let nle = [];
  
  for(i = 0; i<a.length; i++){
    while(stack[stack.length-1] >= a[i]){
      stack.pop();
    }
    
    if(stack.length === 0){
      nle[i] = -1;
    } else{
      nle[i] = stack[stack.length-1];
    }
    
    stack.push(a[i]);
  }
  
  console.log(nle);
}

let arr = [4, 5, 2, 10, 8];
nextLesserELeLeft(arr);