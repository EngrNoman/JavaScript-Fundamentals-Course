const numberArray = [3 , 5,6 ,7 ,3, 4 ,7 ,7]  // Number Array
const stringArray = ["Noman" , "Hammad" , "Ali" , "Sami"]  // String Array
const booleanArray = [true , false] // Boolean Array

let newArray =""
for( let i=0 ; i<numberArray.length; i++){
 newArray += numberArray[i]
}

console.log(newArray)


for(let x in stringArray){
  console.log(stringArray[x])
}
 booleanArray.forEach((x)=>{
  console.log(x)
})


for(let x of numberArray){
  console.log(x)
}