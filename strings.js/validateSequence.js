function validateSubSequence(){
  let i = 0;
  let j = 0;
  while(j<t.length){
    if(s[i] === t[j]){
      i++;
    } 
    j++;
  }
  if(i === s.length){
    return true;
  }
  return false;
}
  
let s = "abc";
let t = "ahcgdb";
let result = validateSubSequence();
console.log(result);