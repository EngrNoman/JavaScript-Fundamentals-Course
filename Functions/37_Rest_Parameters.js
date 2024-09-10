// Write a function to find the sum of any number of arguments using rest parameters.

function sum(...rest){
  let result = 0
  for(let num of rest){
    result += num
  }
  return result
}

console.log(sum(1,1,1,1))