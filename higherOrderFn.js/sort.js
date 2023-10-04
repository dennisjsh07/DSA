// sort in ascending order.
var a=[10,20,15,7,9,12];
a.sort(compareFunction);

function compareFunction(a,b)
{
  return a-b;
}
console.log(a);

// sort in desccending  order
var a=[10,20,15,7,9,12];
a.sort(compareFunction);

function compareFunction(a,b)
{
  return b-a;
}
console.log(a);