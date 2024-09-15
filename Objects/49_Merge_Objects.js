// Merge two objects into a single object.

const obj1 ={
  name: "noman"
}

const obj2 ={
  age:23
}

const obj3 = {...obj1 , ...obj2}
console.log(obj3)