// 1) using global variables...
let count = 0;

function print(){
    if(count === 5){ // stoppage condition...
        return;
    }
    console.log(count);
    count++;
    print();
}

print();

// 2) without using global variables...
function print(n, count){
    if(count === n){
      return;
    }
    
    console.log(count);
    count++;
    print(n, count);
}
  
print(5, 0);

// 3) printing in descending order...
function print(n, count){
    if(count === 0){
      return;
    }
    
    console.log(count);
    count--;
    print(n, count);
}
  
print(5, 5);