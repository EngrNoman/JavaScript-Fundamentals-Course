// Write a program to count the number of digits in a number.

function countDigits(num) {
  // Convert the number to a string and remove any negative sign
  let numStr = Math.abs(num).toString();
  // Return the length of the string
  return numStr.length;
}

// Get the number from the user
let num = parseInt(prompt("Enter a number to count its digits: "), 10);

// Check if the input is a valid number
if (!isNaN(num)) {
  console.log("The number of digits in " + num + " is: " + countDigits(num));
} else {
  console.log("Please enter a valid number.");
}
