function greater(){
    let ans = [-1, -1];
    let i = 0;
    let j = 0;
    
    let c1 = 0;
    let c2 = 0;
    while(i < a.length){
      if(a[i] > b[j]){
        c1++;
      } else{
        if(b[j] > a[i]){
          c2++;
        }
      }
      
      i++;
      j++;
    }
    
    ans[0] = c1;
    ans[1] = c2
    return ans;
    
  }
  
  let a = [5,6,7];
  let b = [3,6,10];
  
  let res = greater();
  console.log(res);