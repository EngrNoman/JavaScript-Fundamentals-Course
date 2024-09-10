function higherOrder(fn) {
  console.log('Before calling the passed function...');
  
  // Call the passed function
  fn();
  
  console.log('After calling the passed function...');
}

function sayHello() {
  console.log('Hello from inside the function!');
}

// Calling the higher-order function and passing sayHello as an argument
higherOrder(sayHello);
