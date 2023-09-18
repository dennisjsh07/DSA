function addNums(num1,num2)
{
    console.log(num1+num2)
}
addNums(5,4);

//initialise it at the function itself.
function addNums(num1=5,num2=4)
{
    console.log(num1+num2)
}
addNums(); 

//overwriting the default values.
function addNums(num1=5,num2=4)
{
    console.log(num1+num2)
}
addNums(1,1); 

//using return
function addNums(num1,num2)
{
    return (num1+num2)
}
console.log(addNums(1,2)); 

//different ways of writing function.
const addNums=function(num1,num2)
{
    return (num1+num2)
}
console.log(addNums(1,2)); 

//Arrow function.
const addNums=(num1,num2)=>
{
    return (num1+num2)
}
console.log(addNums(1,2));



