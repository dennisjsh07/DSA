function maxMin(){
    let ans = [-1, -1]
    let j = 0;
    let count = 0;
    for(let i = 0; i<scores.length; i++){
      if(scores[i] > scores[j]){
        j = i;
        count++;
      }
    }
    ans[0] = count;
    
    j = 0;
    count = 0;
    for(let i = 0; i<scores.length; i++){
      if(scores[i] < scores[j]){
        j = i;
        count++;
      }
    }
    ans[1] = count;
    
    return (ans);
  }
  
  let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
  
  let res = maxMin();
  console.log(res);