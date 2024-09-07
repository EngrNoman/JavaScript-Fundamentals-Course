// Check whether a number is prime or not

function isPrime(num) {
  if (num <= 1) {
      return false;  // Numbers less than or equal to 1 are not prime
  }
  if (num <= 3) {
      return true;   // 2 and 3 are prime numbers
  }
  if (num % 2 === 0 || num % 3 === 0) {
      return false;  // Multiples of 2 and 3 are not prime
  }
  for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
          return false;  // Check divisibility by i and i + 2
      }
  }
  return true;  // Number is prime if no divisors were found
}

// Get the number from the user
let num = parseInt(prompt("Enter a number to check if it's prime: "), 10);

// Check if the input is a valid number
if (!isNaN(num)) {
  if (isPrime(num)) {
      console.log(num + " is a prime number.");
  } else {
      console.log(num + " is not a prime number.");
  }
} else {
  console.log("Please enter a valid number.");
}
