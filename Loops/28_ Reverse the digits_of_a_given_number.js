// Reverse the digits of a given number

function reverseDigits(number){
  let numStr = number.toString()

  let reversedStr = numStr.split('').reverse().join('')

  return parseInt(reversedStr , 10)

}


let num = parseInt(prompt("Enter a number to reverse its digits: "), 10);

// Check if the input is a valid number
if (!isNaN(num)){
    console.log("The number with reversed digits is: " + reverseDigits(num));
} else {
    console.log("Please enter a valid number.");
}