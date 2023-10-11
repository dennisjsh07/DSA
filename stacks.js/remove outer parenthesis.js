function removeOuterParenthesis(a){
  let stack = [];
  let res = '';
  
  for(i = 0; i<a.length; i++){
    if(a[i] === '('){
      if(stack.length > 0){
        res += a[i];
      }
      stack.push(a[i]);
    } else{
      if(a[i] === ")"){
        stack.pop();
        if(stack.length > 0){
          res += a[i];
        }
      }
    }
  }
  
  console.log(res);
}

var s = "(()())(())(()(()))"

removeOuterParenthesis(s);