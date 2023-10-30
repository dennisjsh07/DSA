function validPalindrome(){
    s = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    // return s
    let n = s.length;
    let i = 0;
    let j = n-1;
    while(i<j){
      if(s[i] !== s[j]){
        return false;
      }
      i++;
      j--;
    }
    return true;
  }
  
  let s = "A man, a plan, a canal: Panama"
  let result = validPalindrome();
  console.log(result);