var n = 16;
var i = 1;
while (i <= n) {
  if (i % 5 == 0) {
    i=i+1;
    continue;
  }
  console.log(i);
  i = i + 1;
}
