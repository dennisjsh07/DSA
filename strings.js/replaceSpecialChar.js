let s = ['is/', 'is.', '/is.']

function logic(s){
  return s.replace(/[^a-zA-Z0-9]/g,'');
}

let a = s.map(logic)
console.log(a);
