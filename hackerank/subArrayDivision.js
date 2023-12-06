function birthday(s, d, m) {
    // Write your code here...
    let count = 0;
    for(let i = 0; i<s.length; i++){
      let sum = 0;
      for(let j = i; j<s.length; j++){
        sum += s[j];
        // console.log('sum -->', sum);
        let length = j-i+1;
        if(sum === d && length === m){
          count++;
        }
      }
    }
    
    return (count);

}
let s = [1,2,1,3,2];
let d = 3;
let m = 2;

let res = birthday(s, d, m);
console.log(res);

