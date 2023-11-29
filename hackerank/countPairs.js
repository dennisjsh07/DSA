function countPairs(){
    let a = new Map();
    let b = new Set();
    let sum = 0;
    
    for(let i = 0; i<n; i++){
      if(a.get(arr[i]) === undefined){
        a.set(arr[i], 1);
      }
      else{
        a.set(arr[i], a.get(arr[i])+1);
      }
      b.add(arr[i]);
    } 
    
    let c = [ ...b];
    // console.log(c);
    
    for(let i = 0; i<c.length; i++){
      sum += (Math.floor(a.get(c[i])/2));
    }
    
    console.log(sum);
}

// simplfying the code using for in and for of loop:

function countPairs(){
    let count = {};
    let sum = 0;

    // count using for of loop...
    for(let i of arr){
        count[i] = (count[i] || 0) + 1;
    }

    // use for in to iterate through objects...
    for(let i in count){
        sum += Math.floor(count[i]/2);
    }

    return (sum);
    
}

  
let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]
let n = arr.length;

countPairs();