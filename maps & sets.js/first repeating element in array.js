function firstRepeatingElement(){
  let a = new Map();
  
  for(let i = 0; i<arr.length; i++){
    if(a.get(arr[i]) === undefined){
      a.set(arr[i], 1);
    } else{
      a.set(arr[i], a.get(arr[i])+1);
    }
  }
  
  for(let i of arr){
    if(a.get(i) > 1){
      return i
    }
  }
}

let arr = [1,5,3,4,3,5,6];

let res = firstRepeatingElement();
console.log(res);


// find the max frequency.
var a = [5,3,5,9,5,3, 2,1];
var b = new Map();
for(i=0;i<a.length;i++)
{
if(b.get(a[i])== undefined)
{ 
  b.set(a[i],1);
}
else
{
  b.set(a[i],b.get(a[i])+1);
}
}
console.log(b);
var max=0;
for(i=0;i<a.length;i++)
{
  if(b.get(a[i])>max)
  {
    max=a[i];
  }
}
console.log(max);




