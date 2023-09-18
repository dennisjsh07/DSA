var n = 10;
for (var i = 2; i <= n; i = i + 2) {
  if (i % 4 == 0) {
    continue;
  }
  console.log(i);
}
