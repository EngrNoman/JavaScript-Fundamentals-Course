// Write a function that accepts a callback function as a parameter
function greet(name , callback){
  console.log(`Hello, ${name}!`);
  
  // Execute the callback function
  callback();
}

function sayGoodbye() {
  console.log('Goodbye!');
}

// Calling greet and passing sayGoodbye as a callback
greet('John', sayGoodbye);