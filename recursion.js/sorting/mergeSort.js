function merge(arr,low,mid,high){
    let i = low;
    let j = mid+1;
    let res = [];
  
    while(low <= mid && j<= high){
      if(arr[i] <= arr[j]){
        res.push(arr[i]);
        i++;
      } else{
        res.push(arr[j]);
        j++;
      }
    }
    
    while(i <= mid){
      res.push(arr[i]);
      i++;
    }
    
    while(j<=high){
      res.push(arr[j]);
      j++;
    }
    
    for(let i = low; i<=high; i++){
      arr[i] = res[i - low];
    }
    
  }
  
  
  function ms(arr,low,high){
    
    let mid = Math.floor((low+high)/2);
    
    if(low == high) return;
    
    ms(arr,low,mid);
    ms(arr, mid+1,high);
    merge(arr, low, mid,high);
    
  }
  
  
  let arr = [3, 1, 2, 4, 1, 5, 2, 6, 4];
  let low = 0;
  let high = arr.length-1;
  
  ms(arr, low, high);
  console.log(arr);
  