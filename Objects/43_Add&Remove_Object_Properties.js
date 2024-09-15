// Add and remove properties from an object.

const obj = {
  name:"Noman",
  age : 23,
  address : "Bahawalnagar"
}


obj.class = "BSCS"
obj["roll"] = 564

delete obj.name
console.log(obj)
