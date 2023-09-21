var a = [4,2,0,3,2,5];

let l = 0;
let r = a.length-1;
let lMax = 0;
let rMax = 0;
let res = 0;

while(l<=r){
  if(a[l]<=a[r]){
    if(a[l]>=lMax){
      lMax = a[l]
    } else{
      res+=lMax-a[l]
    }
    l++
  } else{
    if(a[r]>=rMax){
      rMax = a[r]
    }
    else{
      res+=rMax-a[r];
    }
    r--;
  }
}

console.log(res);