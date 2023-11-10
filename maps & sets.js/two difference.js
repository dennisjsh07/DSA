// brute solution... 
// Tc = O(n);
// Sc = O(1);
function twoDiff(a){
  a.sort();
  
  for(i = 0; i<a.length; i++){
    for(j = i+1; j<a.length; j++){
      if(a[j] - a[i] === target){
        console.log(a[i],a[j]);
      }
    }
  }
}

// better solution... 
// Tc = O(n);
// Sc = O(n);
function twoDiff(a){
  let c = new Set();
  
  for(i = 0; i<a.length; i++){
    c.add(a[i]);
  }
  
  // console.log(c);
  
  for(i = 0; i<a.length; i++){
    let b = a[i];
    let d = (target + b);
    // console.log(d);
    if(c.has(d)){
      console.log(b ,d);
    }
  }
}

var arr = [5,2,3,80,5,20];
let target = 15;
twoDiff(arr)


