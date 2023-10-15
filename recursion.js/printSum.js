// 1) parametric way...

function add(i, sum){
    if(i<1){
      console.log(sum);
      return;
    }
    add(i-1, sum+i)
}
add(3, 0);

// 2) functional way...

function add(i, sum){
    if(i > 3){
      console.log(sum);
      return;
    }
    add(i+1, sum+i)
  }
  add(1, 0);
  
