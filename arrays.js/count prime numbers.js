function countPrime(){
  
  let i = 2;
  let b = [];
  let count = 0;
  while(i <= n){
    let flag = true;
    for(j = 2; j<i; j++){
      if(i%j === 0){
        flag = false;
        break;
      } 
    }
    if(flag === true){
      b.push(i);
      count++;
    }
    i++;
  }
  console.log(b);
  console.log(count);
  
}

let n = 10;

countPrime();

