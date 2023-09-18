var a = [4,3,2,1];
var swap = 0;
for(j = 0; j<a.length-1; j++){
var min = a[j];
var index = j;
for(i = j+1; i<a.length; i++){
  if(a[i]<min){
    min = a[i];
    index = i
  }
}
// console.log(min);
if(index!==j){
var temp = a[j];
a[j] = a[index];
a[index] = temp;
swap++;
}
// console.log(a,swap)
}
console.log(a,swap)
