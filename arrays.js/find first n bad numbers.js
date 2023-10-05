// A Bad Number is defined by a number which is divisible by sum of its digit.
// Example1 :- 12 -> Sum of digit (1+2) = 3. 12 is divisible by 3 therefore its a bad number
// Example2 :- 45 -> Sum of digit (4+5) = 9. 45 is divisible by 9 therefore its a bad number
// 11 is not a Bad (1+1 ) =2 Since 11 is not divisible by 2.

function badNumbers(n){
  
  let i = 10;
  let badArr = [];
  let count = 0;
  
  while(count<n){
  let temp = i;
  let sum = 0;

  while(temp>0){
    let x = temp%10;
    sum = sum + x;
    temp = Math.floor(temp/10);
  }
  // console.log(sum);
  if((i%sum) === 0){
    badArr.push(i);
    count++
  }
  i++;
  
  }
  console.log(badArr)
}

badNumbers(10);