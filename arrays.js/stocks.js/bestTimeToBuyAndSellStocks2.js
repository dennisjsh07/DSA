function sellStock(){
    let n = prices.length
    let j = 0;
    let max = 0;
    for(i = 0; i<n; i++){
      if(prices[i] < prices[j]){
        j = i;
      }
      let profit = prices[i] - prices[j];
      // console.log(profit);
      if(profit > 0){
        j = i;
        max += profit;
        // console.log(max);
      }
    }
    
    console.log(max);
  }
  
  let prices = [7,1,5,3,6,4];
  sellStock();