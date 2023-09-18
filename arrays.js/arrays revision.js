var states=new Array("karnataka","kerala","goa","andhra");
// 1) print all the states.
console.log(states);
console.log( );

// 2) print only goa.
console.log(states[2]); 
console.log( );
//
// 3) replace karnataka with tamil nadu.
states[0]="tamil nadu";
console.log(states);
console.log(states[0]);
console.log( );

// 4) print the length of the array.
console.log(states.length); 
console.log( );

// 5) remove the last value of the array.
//states.pop();
//states.pop();
//states.pop();
//console.log(states);
//console.log( );

// 6) insert a new value to the first element.
states.unshift("new value");
console.log(states); 
console.log( );

// 7) delete the first element.
states.shift();
console.log(states); 
console.log( );

// 8) find the index value of goa.
console.log(states.indexOf("goa"));
console.log( );

// 9) find the index value of tamil nadu.
console.log(states.indexOf("tamil nadu"));
console.log( );

// 10) find the index value of kerala.
console.log(states.indexOf("kerala"));
console.log( );

// 11) get an array from dennis.
console.log(Array.from("dennis"));

// 12) Write a program to declare an array of size n and store the numbers 1,2,3,4 ...n in the array
var a=new Array();
var n=20;
for(i=1;i<=n;i++)
{
    a.push[i];
    console.log(a);
}
