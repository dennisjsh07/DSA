function longSum(){
let sum = BigInt(0);

for(let i of array){
    sum += BigInt(i);
}

return sum.toString();
}

let array = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

let res = longSum();
console.log(res);
  