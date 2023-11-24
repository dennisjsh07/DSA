function removeAdjacentDups(){
  let stack = [];
  
  for(let i = 0; i<a.length; i++){
    if(
        (stack[stack.length-1] === '(' && a[i] === ')') ||
        (stack[stack.length-1] === '[' && a[i] === ']') ||
        (stack[stack.length-1] === '{' && a[i] === '}')
       )
       {
      stack.pop();
    } else{
      stack.push(a[i]);
    }
  } 
  
  if(stack.length > 0){
    return false;
  } else{
    return true;
  }
}

var a = "()[]{}"

let res = removeAdjacentDups();
console.log(res);
