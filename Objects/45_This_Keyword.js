// Demonstrate the usage of the this keyword inside an object method.

const obj = {
  fname: "Noman",
  lname : "Mehmood",
  class : "BSCS",
  detail(){
      console.log(`${this.fname} S/O ${this.lname} `)
  }
}

obj.detail()