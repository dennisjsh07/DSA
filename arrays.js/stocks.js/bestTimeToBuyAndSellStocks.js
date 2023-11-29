function buyAndSellStocks(){
  let j = 0;
  let max = 0;
  for(let i = 0; i<a.length; i++){
    if(a[i] <a[j]){
      j = i;
    }
    
    let profit = a[i] - a[j];
    if(profit > max){
      max = i;
    }
  }
  
  return a[max];
}

let a = [7,1,5,3,6,4];

let res = buyAndSellStocks();
console.log(res);