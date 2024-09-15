// Create a method inside an object and call it.

const obj = {
  fname: "Noman",
  lname : "Mehmood",
  class : "BSCS",
  detail(){
      console.log(`${this.fname} S/O ${this.lname} `)
  }
}

obj.detail()