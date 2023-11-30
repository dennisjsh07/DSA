function staircase(n) {
    for (let i = 1; i <= n; i++) {
      let spaces = '';
      let stairs = '';
  
      // Add spaces
      for (let j = 0; j < n - i; j++) {
        spaces += ' ';
      }
  
      // Add stairs
      for (let k = 0; k < i; k++) {
        stairs += '#';
      }
  
      console.log(spaces + stairs);
    }
  }
  
  // Example: Staircase of height 5
  staircase(5);
  