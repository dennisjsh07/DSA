function bonAppetit(bill, k, b) {
    let totalBill = 0;

    // Calculate the total bill excluding the item Anna didn't eat
    for (let i = 0; i < bill.length; i++) {
        if (i !== k) {
            totalBill += bill[i];
        }
    }

    // Calculate Anna's share
    let annaShare = totalBill / 2;

    // Check if Anna was charged the correct amount
    if (annaShare === b) {
        console.log("Bon Appetit");
    } else {
        console.log(b - annaShare);
    }
}

// Example usage
let bill = [3, 10, 2, 9];
let k = 1; // Anna didn't eat the item at index 1
let b = 12; // Amount Anna was charged

bonAppetit(bill, k, b);
