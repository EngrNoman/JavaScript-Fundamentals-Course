// Iterate over all properties of an object using a for...in loop.

const obj = {
  name : "NOman",
  age : 23,
  city : "BahaealNagar"
}

for (const key in obj) {
  console.log(obj[key])
}