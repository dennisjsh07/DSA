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