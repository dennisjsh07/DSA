function validateSequence(){
  let stack = [];
  let j = 0;
  for(let i = 0; i<pushed.length; i++){
    stack.push(pushed[i]);
    
    while(popped[j] === stack[stack.length-1] && j < popped.length){
      stack.pop();
      j++;
    }
  }
  
  if(stack.length > 0){
    return false;
  } else{
    return true;
  }
}

var pushed = [1,2,3,4,5];
var popped = [5,4,3,2,1];

let res = validateSequence();
console.log(res);