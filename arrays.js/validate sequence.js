function validateSequence(a,b){
  
  let stack = [];
  let j = 0;
  
  for(i = 0; i<pushed.length; i++){
    stack.push(a[i]);
    while(stack[stack.length-1] === b[j] && j<popped.length){
      stack.pop();
      j++
    }
  }
  
  if(stack.length > 0){
    console.log(false);
  } else{
    console.log(true);
  }
}

var pushed = [1,2,3,4,5];
var popped = [3,5,3,2,2];

validateSequence(pushed,popped);