let s = "  hello world  ";
let string = s.split(' ')
let words = [];
for(i = string.length-1 ;i>=0; i--){
  if(string[i] !== ''){
      words.push(string[i]);
  }
}
let str = '';
for(i = 0; i<words.length; i++){
  str+=(words[i]);
  if(i!==words.length-1){
      str+=' ';
  }
}
console.log(str);

// check for spaces
// let b = [];
// let c = str.split(' ')
// for(i = 0; i<c.length; i++){
//   b.push(c[i])
// }
// console.log(b);