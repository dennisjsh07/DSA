function kangaroo(x1, v1, x2, v2) {
    // Check if kangaroos start at the same position with the same rate
    if (x1 === x2 && v1 === v2) {
      return true;
    }
  
    // Check if kangaroos will land on the same position at the same time
    // Solve the equation x1 + n * v1 = x2 + n * v2 for n (number of jumps)
    // If n is a positive integer, they will land on the same position
    const n = (x2 - x1) / (v1 - v2);
  
    // Check if n is a positive integer
    return n >= 0 && Number.isInteger(n);
  }
  
  let x1 = 0;
  let v1 = 3;
  let x2 = 4;
  let v2 = 2;
  
  let res = kangaroo(x1, v1, x2, v2);
  console.log(res);
  