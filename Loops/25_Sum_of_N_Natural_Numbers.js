// Calculate the sum of the first N natural numbers.

function sumOfNaturalNumbers(number){
  return (number *(number+1) / 2)
}


let number = parseInt(prompt("Enter the number: ") , 10)

if(!isNaN(number)  && number>0){
  console.log("The sum of the first " + N + " natural numbers is: " + sumOfNaturalNumbers(N));
} else {
    console.log("Please enter a valid positive integer.");
}