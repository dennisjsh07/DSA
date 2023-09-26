var s = "(()())(())(()(()))"

let stack = [];
let result = '';

for(i = 0; i<s.length; i++){
  if(s[i] === '('){
    if(stack.length>0){
      result+=('(')
    }
    stack.push('(')
  } 
  else if(s[i] === ')'){
    stack.pop();
    if(stack.length>0){
      result+=(')')
    }
  }
}
  console.log(result);
