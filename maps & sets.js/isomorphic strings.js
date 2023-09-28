let s = "badc";
let t = "baba";

if(s.length !== t.length){
  console.log(false);
}

let b = new Map();
let c = new Set();

let flag = true;
for(i = 0; i<s.length; i++){
  if(b.get(s[i]) === undefined){
    if(!c.has(t[i])){
      b.set(s[i], t[i]);
      c.add(t[i]);
    } else{
      flag = false;
      // console.log(false);
    }
  }
  // console.log(true);
}
if(flag === false){
  console.log(false);
} else{
  console.log(true);
}

// youtube link :- https://www.youtube.com/watch?v=ogTMIFPjNkQ
