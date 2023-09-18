// desired output [2,3,4,5,1];

var a = [1, 2, 3, 4, 5];
var temp = a[0];

for (var i = 1; i < a.length; i++) {
  a[i - 1] = a[i];
}

a[a.length - 1] = temp;

console.log(a);
