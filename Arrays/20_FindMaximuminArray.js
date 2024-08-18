const numberArray = [3 , 5,6 ,7 ,3, 4 ,7 ,7]  // Number Array

function maxValue(x){
  if (x.length === 0) {
    return null;  // Return null if the array is empty
}

  let max = x[0]
  for(let i =0 ; i<x.length ; i++){
    if(max < x[i]){
      max = x[i]
    }
  }

  return max

}

result = maxValue(numberArray)
console.log(result)