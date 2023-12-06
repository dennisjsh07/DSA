function migratoryBirds(arr) {
    // Write your code here...
    let a = new Map();
    
    for(let i = 0; i<arr.length; i++){
      if(a.get(arr[i]) === undefined){
        a.set(arr[i], 1);
      } else{
        a.set(arr[i], a.get(arr[i])+1);
      }
    }
    
    // console.log(a);
    let max = 0;
    for(let i = 0; i<arr.length; i++){
      if(a.get(arr[i]) > max){
        max = a.get(arr[i])
      }
    }
    
    let temp = []
    for(let i = 0; i<arr.length; i++){
      if(a.get(arr[i]) === max){
        temp.push(arr[i]);
      }
    }
    
    temp.sort()
    
    return (temp[0]);

}

let arr = [1 ,2 ,3 ,4 ,5 ,4 ,3 ,2 ,1 ,3 ,4];

// migratoryBirds(arr);
let res = migratoryBirds(arr);
console.log(res);