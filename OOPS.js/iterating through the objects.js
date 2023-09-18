var obj={
    key1 : "value1",
    key2 : "value2",
    key3 : "value3"

}
// console.log(Object.keys(obj));// this will convert the object into array

var a=(Object.keys(obj));
a.forEach(function(key)
{
   console.log(obj[key]); 
})
