function totalSum(a){
  let sum = 0;
  for(i = 0; i<a.length; i++){
    sum += a[i];
  }
  return sum;
}

function pivotIndex(a, b){
  let ls = 0;
  let rs = b
  let i = 0;
  let index = 0;
  while(i<a.length){
    rs = rs - a[i];
    if(ls === rs){
      index = i;
      break;
    } else{
      ls = ls+a[i];
    }
    i++;
  }
  return (index);
}

let arr = [1,7,3,6,5,6];

let totalSumOfArr = totalSum(arr);
// console.log(totalSumOfArr);

let pIndex = pivotIndex(arr, totalSumOfArr);
console.log(pIndex);