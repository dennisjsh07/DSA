// 1) using peak value of binary search...

function peakValue(a){
  let low = 0;
  let high = a.length-1;
  
  while(low<=high){
    let mid = Math.floor((low+high)/2);
    
    if((mid === low || a[mid]>a[mid-1]) && (mid === high || a[mid]>a[mid+1])){
      return a[mid];
      break;
    }
    else if(mid>low && a[mid-1]>a[mid]){
      high = mid-1
    }
    else{
      low = mid+1;
    }
  }
}

let arr = [4,5,6,7,0,1,2];
console.log(peakValue(arr));

// 2) using 2 pointer approach...

function peakValue(a){
  let j = 0;
  let i = j+1;
  let index = 0;
  
  while(i<a.length){
    if(a[j] > a[i]){
      index = j;
      break;
    }
    i++;
    j++;
  }
  
  return a[index];
}

let array = [4,5,6,7,0,1,2];
console.log(peakValue(array));