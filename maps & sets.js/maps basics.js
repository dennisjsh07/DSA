// how to create maps
// 1) a={}
// (or) //
// b=new Map();

// ***VIP*** learn.
// 1) how to search values;
// 2) how to update values;
// 3) how to insert values;
// 4) how to check if key is present or not;

// 1) create a new map and its functions.
// #set Map -- adding values inside the map.
 var b=new Map();
 b.set(1,"uno");
 b.set(2,"dos");
 b.set(3,"tres");
 console.log(b);
 console.log( );
// #get Map
console.log(b.get(0));
console.log(b.get(1));
console.log(b.get(2));
console.log( );

// #delete value
b.delete(2);
console.log(b);
console.log( );

 // 2) insert key element & value.
 var b=new Map();
if(b.get(1)==undefined)
{
    b.set(1,10);
}
 console.log(b.get(1));

 // 3) acreating new set and its functions.
 var c=new Set();
 c.add(5);
 c.add(10);
 c.add(15);
 console.log(c);
 console.log( );
 // #find size.
 console.log(c.size);
 console.log( );
 // #check if set has a value.
 console.log(c.has(5));
 console.log(c.has(20));
 console.log( );
 // #delete.
 c.delete(5);
 console.log(c);
 console.log( );
 // #covert set to array.
 console.log(Array.from(c));

 // in hashing the 3-functions search,insert,delete will happen with a complexity of O(1) //


