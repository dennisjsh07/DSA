let strs = ["dog","racecar","car"];

strs.sort()
// console.log(strs);

let first = strs[0];
let last = strs[strs.length-1];

let result = '';
let flag = false;
for(i = 0; i<first.length; i++){
  if(first[i] !== last[i]){ // first check for condition...
    break;
  }
  result+=first[i];
}

console.log(result);



// youtube link :- https://www.youtube.com/watch?v=wtOQaovlvhY