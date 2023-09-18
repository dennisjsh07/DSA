var n=1234;
var rev=0;
while(n!=0)
{
var x=n%10;
rev=(rev*10)+x;
n=Math.floor(n/10);
}
console.log(rev); //use return(rev); for return function.


// using javaScript commands...
var n = 1234;
var convertToString = n.toString();
console.log('convertToString>>>>', convertToString);

var splitString = convertToString.split('');
console.log('splitString>>>>', splitString);

var reverseString = splitString.reverse();
console.log('reverseString>>>>', reverseString);

var joinString = reverseString.join('');
console.log('joinString>>>>', joinString);

var convertStringToInteger = parseInt(joinString);
console.log('convertStringToInteger>>>>', convertStringToInteger);