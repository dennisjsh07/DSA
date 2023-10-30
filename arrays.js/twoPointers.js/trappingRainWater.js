function trappingRainWater(a){
  let l = 0;
  let r = a.length-1;
  let lmax = 0;
  let rmax = 0;
  let res = 0;
  
  while(l <= r){
    if(a[l] <= a[r]){
      if(a[l] >= lmax){
        lmax = a[l];
      } else{
        res += lmax - a[l];
      }
      l++
    }
    else{
      if(a[r] >= rmax){
        rmax = a[r];
      } else{
        res += rmax - a[r];
      }
      r--
    }
  }
  
  console.log(res);
}

var arr = [0,1,0,2,1,0,1,3,2,1,2,1];
trappingRainWater(arr);
