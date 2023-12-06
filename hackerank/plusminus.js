function plusMinus(arr) {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        } else if (arr[i] < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    }

    const positiveFraction = positiveCount / n;
    const negativeFraction = negativeCount / n;
    const zeroFraction = zeroCount / n;

    // Output the fractions with 6 decimal places
    console.log(positiveFraction.toFixed(6));
    console.log(negativeFraction.toFixed(6));
    console.log(zeroFraction.toFixed(6));
}

// Example usage
let array = [-4, 3, -9, 0, 4, 1];
plusMinus(array);
