var a = [1, 2, 3, 4, 5];
b = [];
var sum = 0;
for (i = 0; i < a.length; i++) {
  sum = sum + a[i];
  b.push(sum);
}
console.log(b);
