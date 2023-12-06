function peak(){
  let low = 0;
  let high = n-1;
  while(low <= high){
    let mid = Math.floor((low+high)/2);
    if((mid === low || a[mid] > a[mid-1]) && (mid === high || a[mid] > a[mid+1])){
      return a[mid];
    }
    else if(mid > low && a[mid-1] > a[mid]){
      high = mid - 1;
    }
    else{
      low = mid+1;
    }
  }
}

let a = [1,8,1,3,5,6,4];
let n = a.length;

let res = peak();
console.log(res);
