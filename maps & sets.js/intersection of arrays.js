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


// 2) Hashing way  and also get unique elements;

var a=[4,9,5];
var b=[9,4,9,8,4];
let c = new Set();
let d = [];
for(i = 0; i<b.length; i++){
  c.add(b[i]);
}
// console.log(c);
for(i = 0; i<a.length; i++){
  if(c.has(a[i])){
    d.push(a[i]);
  }
}
console.log(d);



