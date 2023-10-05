function countArray(a){
  let b = [];
  for(i = 0; i<a.length; i++){
    let count = 0;
    for(j = 0; j<a[i].length; j++){
      if(a[i][j] === 'a'){
        count++;
      }
    }
    b.push(count);
  }
  return b
}

function sortedArray(a,c){
  for(i = 0; i<a.length-1; i++){
    for(j = 0; j<a.length-1-i; j++){
      if(c[j+1] > c[j] || (c[j+1] === c[j] && a[j+1].length > a[j].length)){
        var temp = c[j+1];
        c[j+1] = c[j];
        c[j] = temp;
        
        var temp = a[j+1];
        a[j+1] = a[j];
        a[j] = temp;
      }
    }
  }
  
  return (a);
}

let arr = ["vaibhav", "almanac" , "is" ,"fat", "button","aabaca"];

let countArr = (countArray(arr));
// console.log(countArr);

let sortedArr = sortedArray(arr, countArr);
console.log(sortedArr);