// 1) parametric way...

function factorial(n, val){
    if(n < 1){
      console.log(val);
      return;
    }
    factorial(n-1, val * n);
}
  
factorial(3, 1);

// 2) functional way...

function factorial(n){
    if(n === 0){
      return 1;
    }
    return n * factorial(n-1);
}
  
let ans = factorial(3);
console.log(ans);
  