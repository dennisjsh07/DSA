// 1) using global variables...
let count = 0;

function print(){
    if(count === n){ // stoppage condition...
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
    if(count === n){
      return;
    }
    
    console.log(count);
    count--;
    print(n, count);
}
  
print(5, 5);

// 4) print series using backtracking...
function print(n, count){
    if(count > n){
      return
    }
    
    console.log(count);
    print(n, count+1);
}
print(5, 1);

// 5) printing in descending order using backtracking...

function print(n, count){
    if(count > n){
      return
    }
    
    print(n, count+1); // calling the function before printing
    console.log(count);
  
  }
  print(5, 1);