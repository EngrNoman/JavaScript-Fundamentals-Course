// Add a method to an object’s prototype and use it.


function Person(name , age , city){
  this.name = name
  this.age = age
  this.city = city
}

Person.prototype.getDetails = function(){
  return `${this.name} is ${this.age} years old and lives in ${this.city}.`;
}


const person1 = new Person("Noman" , 23 , "BWN")
const person2 = new Person("Hammad" , 25 , "BWN")
const person3 = new Person("Adnan" , 24 , "BWN")

console.log(person1.getDetails())
console.log(person2.getDetails())
console.log(person3.getDetails())

