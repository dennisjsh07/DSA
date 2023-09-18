var a = [5, 2, 1, 4, 7, 8, 3];
for (var i = 0; i < a.length - 1; i++) {
  var swap = 0; // to find the number of swaps.
  for (var j = 0; j < a.length - 1 - i; j++) {
    if (a[j + 1] > a[j]) {
      var temp = a[j];
      a[j] = a[j + 1];
      a[j + 1] = temp;
      swap = swap + 1;
    }
  }
  console.log(swap);
  if (swap == 0) {
    break;
  }
}
console.log(a);
