let s = 'aacc';
let t = 'ccac';

let b = new Map();
let e = new Map();
let c = new Set();

for(i = 0; i<s.length; i++){
  if(b.get(s[i]) === undefined){
    b.set(s[i], 1);
  } else{
    b.set(s[i], b.get(s[i])+1);
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

let flag = true;
for(i = 0; i<t.length; i++){
  // console.log(s[i] +'-->'+ b.get(s[i]));
  if(c.has(t[i])){
    if(b.get(t[i]) !== e.get(t[i])){
      flag = false;
    }
  } else{
    flag = false;
  }
}

if(flag === false){
  console.log(false);
} else{
  console.log(true);
}
