var a = [100, 80, 60, 70, 60, 75, 85];
let ans = [];
let stack = [];
let index = [];
let ansIndex = [];

for(i = 0; i<a.length; i++){
  while(a[i]>=a[stack[stack.length-1]] && stack.length>0){
    stack.pop();
    index.pop();
  }
  if(stack.length === 0){
    ans[i] = -1;
    ansIndex[i] = -1;
  } else{
    ans[i] = stack[stack.length-1];
    ansIndex[i] = index[index.length-1];
  }
  stack.push(a[i]);
  index.push(i);
}

console.log(ans);
console.log(ansIndex);

let b = [];
for(i = 0; i<a.length; i++){
  b.push(i - ansIndex[i]);
}
console.log(b);