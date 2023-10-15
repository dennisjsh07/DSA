function palindrome(i, a){
    if(i == Math.floor(n/2)){
      return true;
    }
    
    if(a[i] !== a[(n-1)-i]){
      return false;
    }
    
    return palindrome(i+1, a);
}
  
let arr = 'madam';
let n = arr.length;
let isPalindrome = palindrome(0, arr);
console.log(isPalindrome);