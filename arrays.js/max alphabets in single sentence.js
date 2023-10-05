// Return the index of sentence that contain maximum number of alphabet 'a' in a single sentence.

function maxAlphabets(a){
  let max = 0;
  for(i = 0; i<a.length; i++){
    let count = 0;
    for(j = 0; j<a[i].length; j++){
      if(a[i][j] === 'a'){
        count++;
      }
    }
    // console.log(count);
    if(count > max){
      max = count;
    }
  }
  
  return (max);
}

let arr = ["ananya loves sharpener", "apple is a very healthy fruit", "this is great thanks very much"];

let maxA = maxAlphabets(arr);
console.log(maxA);

