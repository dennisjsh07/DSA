function validParenthesis(a){
  let stack = [];
  
  for(i = 0; i<a.length; i++){
    if(stack.length === 0){
      stack.push(a[i]);
    }
    else if(stack[stack.length-1] === '(' && a[i] === ')' ||
    stack[stack.length-1] === '{' && a[i] === '}' ||
    stack[stack.length-1] === '[' && a[i] === ']'){
      stack.pop();
    }
    else{
      stack.push(a[i]);
    }
  }
  
  if(stack.length === 0){
    console.log(true);
  } else{
    console.log(false);
  }
}

var s="()[){}"
validParenthesis(s);
