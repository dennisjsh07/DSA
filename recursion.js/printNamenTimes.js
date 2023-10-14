let n = 5;
count = 0;
function printName(){
  if(count === 5){
    return;
  }
  
  console.log('dennis');
  count++;
  printName();  
}

printName();

// 2) not using any global variables...

function printName(n, count){
    if(count === 5){
      return;
    }
    
    console.log('dennis');
    count++;
    printName(n, count);  
  }
  
  printName(5,0);