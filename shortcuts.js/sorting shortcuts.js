//sorting in ascending order.
var a= [5, 2, 8, 1, 6];
a.sort();
console.log(a);


// sorting in descending order
var a= [5, 2, 8, 1, 6];
a.sort(function(a,b)
{
  return b-a
});
console.log(a);
