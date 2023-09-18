var a=[10,20,15,7,9,12];

// for(i=0;i<a.length;i++)
// {
//   console.log(a[i]);
// }

// a.forEach(function(a)
// {
//   console.log(a); //we will be getting the elemnts a[i] and not the array a
// })

// (or)

// a.forEach(function(i)
// {
//   console.log(i);
// })

// if we want to print the array for i numner of times.
a.forEach(function(i)
{
  console.log(a);
})

// // push the values >20 into a new array
// var a=[10,20,15,7,9,12];
// var b=[];

// a.forEach(function(a)
// {
//   if(a>10)
//   {
//     b.push(a);
//   }
// })
// console.log(b);