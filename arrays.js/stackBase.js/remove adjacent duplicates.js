function removeAdjacentDups(){
  let stack = [];
  
  for(let i = 0; i<a.length; i++){
    if(stack[stack.length-1] === a[i]){
      stack.pop();
    } else{
      stack.push(a[i]);
    }
  } 
  
  return stack;
}

var a = "abbaca";

let res = removeAdjacentDups();
console.log(res);


// time complexity - O(n);
// space complexity - (n);