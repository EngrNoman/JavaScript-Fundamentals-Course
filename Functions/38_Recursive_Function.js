function fic(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  }
  
  // Recursive case
  return n * fic(n - 1);
}

console.log(fic(5));  // Output: 120
console.log(fic(0));  // Output: 1
console.log(fic(3));  // Output: 6
