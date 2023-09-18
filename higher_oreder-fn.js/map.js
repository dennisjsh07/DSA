// mpas basically returns us the array of the objects that we return
var a=[10,20,15,7,9,12];

var b=a.map(function(a)
{
  return (a);
})
console.log(b);


// return the sqrt (a);
var a=[10,20,15,7,9,12];

var b=a.map(function(a)
{
  return Math.sqrt(a);
})
console.log(b);


// multiply each number bt 2;
var a=[10,20,15,7,9,12];

var b=a.map(function(a)
{
  return (a*2);
})
console.log(b);