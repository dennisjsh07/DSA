// 1) brute force approach...
function maxCount(a){
    let count = 0;
      for(i = 0; i<a.length; i++){
        for(j = i; j<a.length; j++){
          let str = '';
          let sum = 0;
          for(k = i; k<=j; k++){
            str +=(a[k]);
            sum +=a[k];
          }
          // console.log(str+'-->'+sum);
          
          if(sum === l){
            // console.log(str+'-->'+sum);
            count++;
          }
        }
      }
    console.log(count);
  
  }

// 2) better solution...
  function maxCount(a){
    let count = 0;
    for(i = 0; i<a.length; i++){
      let sum = 0;
      for(j = i; j<a.length; j++){
        sum += a[j];
        if(sum === l){
          count++;
        }
      } 
    } 
    console.log(count);
  }
  
  let arr = [1,2,3,1,1,1,1];
  let l = 3;
  maxCount(arr);