///// spread operator in objects
obj1 = {
    name : "dennis",
    age  : 26
  }
  
  obj2={ ...obj1,name :"darren",add:"blore"};
  
  // obj2.name="darren";
  
  console.log(obj1);
  console.log(obj2);




  ///// spread operator in arrays. (it can easily make union of arrays)
  var a=[1,2];
  var b=[3,4];

  var c=[ ...a, ...b];
  console.log(c);




