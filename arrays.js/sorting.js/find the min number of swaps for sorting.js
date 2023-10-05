function selectionSort(a){
  
  let swap = 0;

  for(j = 0; j<a.length-1; j++){
  let min = a[j];
  let index = j;
  for(i = j+1; i<a.length; i++){
    if(a[i] < min){
      min = a[i];
      index = i;
    }
  }
  
  if(index !== j){ // aborting the last swap; i.e, (if index === 0 j !== 0)
  let temp = a[j];
  a[j] = a[index];
  a[index] = temp;
  swap++;
  }
  }
  
  return swap;
}

var arr = [4,3,2,1];

console.log(selectionSort(arr))
