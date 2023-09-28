let s = [100, 80, 60, 70, 60, 75, 85];
let stack = [];
let ans = [];
for(i = 0; i<s.length; i++){
  while(s[stack[stack.length-1]]<=s[i]){
    stack.pop();
  }
  
  if(stack.length === 0){
    ans[i] = -1;
  } else{
    ans[i] = stack[stack.length-1];
  }
  
  stack.push(i);
}

console.log(ans);
let b = [];
for(i = 0; i<s.length; i++){
  b.push(i - ans[i]);
}
console.log(b);