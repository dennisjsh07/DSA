function mostWaterContent(){
    let n = height.length;
    let l = 0;
    let r = n-1;
    let maxVol = 0;
    while(l < r){
      let h = height[l] < height[r] ? height[l] : height[r];
      let w = r - l;
      let vol = h * w;
      if(vol > maxVol){
        maxVol = vol;
      }
      if(height[l] < height[r]){
        l++;
      } else{
        r--;
      }
    }
    
    return (maxVol);
  }
  let height = [1,8,6,2,5,4,8,3,7]
  let result = mostWaterContent();
  console.log(result);