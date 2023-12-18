function qs(arr, low, high) {
    if (low < high) {
      let pIndex = partition(arr, low, high);
      qs(arr, low, pIndex - 1);
      qs(arr, pIndex + 1, high);
    }
  
    return arr;
  }
  
  function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;
  
    while (i < j) {
      
      while (arr[i] < pivot && i <= high - 1) {
        i++;
      }
  
      while (arr[j] > pivot && j >= low + 1) {
        j--;
      }
  
      if (i < j) {
        // Swap arr[i] and arr[j] using a temporary variable
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  
    // Swap arr[low] and arr[j] using a temporary variable
    let temp = pivot;
    pivot = arr[j];
    arr[j] = temp;
  
    return j;
  }
  
  let arr = [4, 6, 2, 5, 7, 9, 1, 3];
  let low = 0;
  let high = arr.length - 1;
  
  let res = qs(arr, low, high);
  console.log(res);
  