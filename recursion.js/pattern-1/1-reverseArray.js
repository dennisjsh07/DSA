// 1) using two variables...
function reverse(l, r){
    if(l>=r){
      console.log(arr);
      return;
    }
    
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    
    reverse(l+1, r-1)
}

// 2) using a single pointer...

function reverse(i){
    if(i == Math.floor(n/2)){
      console.log(arr);
      return;
    }
    
    let temp = arr[i];
    arr[i] = arr[(n-1)-i];
    arr[(n-1)-i] = temp;
    
    reverse(i+1);
}

let arr = [1, 2, 3, 4, 5];
let n = arr.length;
reverse(0, n-1);
