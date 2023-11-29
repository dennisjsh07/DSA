function isIsomorphic(a, b){
  
  if(a.length !== b.length){
    return false;
  }
  
  let c = new Map();
  let d = new Set();
  
  for(i = 0; i<a.length; i++){

    if(c.get(a[i]) === undefined){

      if(!d.has(b[i])){
        c.set(a[i], b[i]);
        d.add(b[i]);
      } else{
        return false;
      }

    } else{
      if(c.get(a[i]) !== b[i]){
        return false;
      }
    }
  }
    
  return true;
}


let s = 'egg';
let t = 'bar';

let isomorphicArr = isIsomorphic(s,t);
console.log(isomorphicArr);
  