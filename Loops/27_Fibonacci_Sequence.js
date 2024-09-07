// Generate the first N numbers in the Fibonacci sequence

function fibonacci(n){
  let fibonacci = [0,1]
  for(let i=2 ; i<n ; i++){
    fibonacci.push(fibonacci[i-1] + fibonacci[i-2])
  }

  return fibonacci.slice(0,n)
}


let number = parseInt(prompt("ENter the number") , 10)

if(!isNaN(number) && number>0){
  console.log("The first " + number + " numbers in the Fibonacci sequence are: " + fibonacci(number));
} else {
    console.log("Please enter a valid positive integer.");
}