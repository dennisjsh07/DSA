// 1) brute force approach...
function longestLength(a){
    let maxlength = 0;
    for(i = 0; i<a.length; i++){
      for(j = i; j<a.length; j++){
        let str = '';
        let sum = 0;
        for(k = i; k<=j; k++){ 
          str +=(a[k]);
          sum +=a[k];
        }
        let lengthOfSubArr = j-i+1;
        // console.log(str+'-->'+sum+'-->'+lengthOfSubArr);
        if(sum === l){
        //   console.log(str+'-->'+sum+'-->'+lengthOfSubArr);
          if(lengthOfSubArr>maxlength){
            maxlength = lengthOfSubArr;
          }
        }
      }
    }
    
    console.log(maxlength);
}

// 2) better approach (using 2 loops)...
function longestLength(a){
    let maxlength = 0;
    for(i = 0; i<a.length; i++){
      let sum = 0;
      for(j = i; j<a.length; j++){
        sum += a[j];
        let length = j-i+1;
        if(sum === l){
          // console.log(length);
          if(length > maxlength){
            maxlength = length;
          }
          break;
        }
      }
  
    }
    
    console.log(maxlength);
}

// 3) better approach using hashmap...
function longestLength(a){
  
    let map = new Map();
    let sum = 0;
    let length;
    let maxLength = 0;
    
    for(i = 0; i<a.length; i++){
      sum += a[i];
      
      let rem = sum - l;
      
      // update length...
      if(map.has(rem)){
        length = i - map.get(rem)
      }
      
      // update map...
      if(!map.has(sum)){
        map.set(sum, i);
      }
      
      // update maxLength;
      if(length > maxLength){
        maxLength = length;
      }
    }
    
    console.log(maxLength);
    
}

let arr = [1,2,3,1,1,1,1];
let l = 3;
longestLength(arr);