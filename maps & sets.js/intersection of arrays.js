// 1) brute force way here we cannot get unique elements;
var a=[4,9,5];
var b=[9,4,9,8,4];
let e = [];
for(i = 0; i<a.length; i++){
  for(j = 0; j<b.length; j++){
    if(a[i] === b[j]){
      e.push(a[i]);
      break;
    }
  }
}
console.log(c);


// 2) Hashing way and also get unique elements;

var a=[4,9,5];
var b=[9,4,9,8,4];
let c= new Set();

for(i = 0; i<a.length; i++){
  for(j = 0; j<b.length; j++){
    if(a[i] === b[j]){
      c.add(a[i]);
    }
  }
}

console.log(Array.from(c));

// 3) Hashing way using 2 sets;
function intersection(){
  let s1 = new Set(a);
  let s2 = new Set();
  for(let i of b){
    if(s1.has(i)){
      s2.add(i);
    }
  }
  
  return [...s2];
}

let a = [4,9,5];
let b = [9,4,9,8,4];

let res = intersection();
console.log(res);



