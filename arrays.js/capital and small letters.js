var a = "USA";

// Check if all letters in the word are in capitals
var allCapital = /^[A-Z]+$/.test(a);
console.log(allCapital); // Output: true

// Check if all letters in the word are not in capitals
var allNotCapital = /^[a-z]+$/.test(a);
console.log(allNotCapital); // Output: false

// Check if only the first letter in the word is capital
var onlyFirstCapital = /^[A-Z][a-z]+$/.test(a);
console.log(onlyFirstCapital); // Output: false


var nums = [1, 3, 5, 6];
var target = 5;

var low = 0;
var high = nums.length;

while (low < high) {
  var mid = Math.floor((low + high) / 2);
  
  if (target <= nums[mid]) {
    high = mid;
  } else {
    low = mid + 1;
  }
}

nums.splice(low, 0, target);

console.log(low); // Output: 2


function findMaxPresentRow(classroom) {
    const rows = classroom.length;
    const cols = classroom[0].length;
  
    let maxPresentRow = -1;
    let maxPresentCount = -1;
  
    for (let i = 0; i < rows; i++) {
      let presentCount = 0;
      for (let j = 0; j < cols; j++) {
        if (classroom[i][j] === 1) {
          presentCount++;
        }
      }
  
      if (presentCount > maxPresentCount) {
        maxPresentCount = presentCount;
        maxPresentRow = i;
      }
    }
  
    return maxPresentRow;
  }
  
  // Example usage:
  const classroom = [
    [1, 0, 1, 1, 0],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0]
  ];
  
  const maxPresentRow = findMaxPresentRow(classroom);
  console.log(maxPresentRow); // Output: 1
  