function reverseString(a){
  let x = (a.split(' '));
  let y = [];
  for(i = x.length-1; i>=0; i--){
    if(x[i] !== ''){
    // console.log(x[i]);
    y.push(x[i]);
    }
  }
  // console.log(y);
  let str = '';
  for(i = 0; i<y.length; i++){
    str += y[i];
    if(i !== y.lenggth-1){
      str+= ' ';
    }
  }
  console.log(str);
}

let s = "  hello world  ";
reverseString(s)


// check for spaces
// let b = [];
// let c = str.split(' ')
// for(i = 0; i<c.length; i++){
//   b.push(c[i])
// }
// console.log(b);