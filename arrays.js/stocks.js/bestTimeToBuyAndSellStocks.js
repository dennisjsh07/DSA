function sellStock(){
    let n = prices.length
    let j = 0;
    let max = 0;
    for(i = 0; i<n; i++){
      if(prices[i] <= prices[j]){
        j = i;
      }
      let profit = prices[i] - prices[j];
      // console.log(profit);
      if(profit > max){
        max = profit;
      }
    }
    
    console.log(max);
    
  
  }
  
  let prices =[7,6,4,3,1];
  sellStock();