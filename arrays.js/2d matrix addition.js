var a = [[1, 2], [3, 4]];
var b = [[2, 3], [4, 5]];
var c = [[], []];
for (i = 0; i < a.length; i++)
{
for (j = 0; j < a[i].length; j++)
 {
c[i][j] = a[i][j] + b[i][j];
 }
}
console.log(c);