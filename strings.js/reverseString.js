function reverse(a){
  let b = (a.split(' '));
  
  let c = [];
  for(i = 0; i<b.length; i++){
    if(b[i] !== ''){
      c.push(b[i]);
    }
  }
  
  // console.log(c);
  let str = '';
  for(i = 0; i<c.length; i++){
    str += c[i];
    if(i !== c.length-1){
    str += '_'
    }
  }
  
  console.log(str);
}

let s = "  hello world  ";
reverse(s);
