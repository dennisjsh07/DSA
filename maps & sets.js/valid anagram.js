// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

function anagram(a, b){
  if(a.length !== b.length){
    return false;
  }
  
  let c = new Map();
  let d = new Map();
  
  for(i = 0; i<a.length; i++){
    if(c.get(a[i]) === undefined){
      c.set(a[i], 1);
    } else{
      c.set(a[i], c.get(a[i])+1);
    }
  }
  
  for(j = 0; j<b.length; j++){
    if(d.get(b[j]) === undefined){
      d.set(b[j], 1);
    } else{
      d.set(b[j], d.get(b[j])+1);
    }
  }
  
  for(i = 0; i<b.length; i++){
    if(c.get(b[i]) !== d.get(b[i])){
      return false;
    }
  }
  
  return true;
}

s = "anagram";
t = "nagaram";

let isAnagram = anagram(s,t);
console.log(isAnagram);