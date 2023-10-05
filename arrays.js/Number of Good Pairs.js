///----leet code link----///
//https://leetcode.com/problems/number-of-good-pairs/

function goodPairs(a){
  let maxCount = 0;
  for(i = 0; i<a.length; i++){
    let count = 0;
    for(j = i+1; j<a.length; j++){
      if(a[i] === a[j]){
        count++;
      }
    }
    // console.log(count);
    maxCount += count
  }
  
  return (maxCount);
}

var arr = [1,2,3,1,1,3];

let noOfPairs = goodPairs(arr);
console.log(noOfPairs);