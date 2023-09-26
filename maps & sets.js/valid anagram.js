// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

s = "aacc";
t = "ccac";

// s = "anagram";
// t = "nagaram";

let flag = true;
if(s.length !== t.length){
  flag = false;
}

let c = new Set();
let d = new Map();
let e = new Map();

for(i = 0; i<s.length; i++){
  if(d.get(s[i]) === undefined){
    d.set(s[i], 1);
  } else{
    d.set(s[i], d.get(s[i])+1);
  }
  c.add(s[i]);
}

for(i = 0; i<t.length; i++){
  if(e.get(t[i]) === undefined){
    e.set(t[i], 1);
  } else{
    e.set(t[i], e.get(t[i])+1);
  }
}

// console.log(c);
// console.log(d);
// console.log(e);

for(i = 0; i<t.length; i++){
  if(d.get(t[i]) !== e.get(t[i])){
    console.log(false);
    flag = false;
    break;
  } 
}

if(flag === false){
  console.log(false);
} else{
  console.log(true);
}