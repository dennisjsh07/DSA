var states=["karnataka","kerala","andhra","tamil nadu"]
// 1) print all the states.
console.log(states);

// 2) print only kerala.
console.log(states[1]);

// 3) replace "karnataka" with "goa".
states[0]="goa";
console.log(states);

// 4) print the length of the array
console.log(states.length);

// 5) remove the last value of the array.
states.pop();
console.log(states);

// 6) remove the first element.
states.unshift("new state"); // this is to shift the elements.
console.log(states);

states.shift();
console.log(states);

// 7) find the index value of andhra
console.log(states.indexOf("andhra"));

// 8) get an array from "kerala"
console.log(Array.from("kerala"));

