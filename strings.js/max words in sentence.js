function maxWords(a){
  count = 0;
  let max = 0;
  for(i = 0; i<a.length; i++){
    let str = '';
    let count = 1;
    for(j = 0; j<a[i].length; j++){
      str+=(a[i][j]);
      if(a[i][j] === ' '){
        count++;
      }
    }
    // console.log(str+'-->'+count);
    if(count > max){
      max = count;
    }
  }
  
  return (max);
}

var arr = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
let maxLength = maxWords(arr);
console.log(maxLength);