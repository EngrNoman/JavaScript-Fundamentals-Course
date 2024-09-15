// Create an array of objects and iterate over it.

const arrObj =[
  {
      id: 1,
      name: "Noman"
  },
  {
      id: 2,
      name: "Hammad"
  },
  {
      id: 3,
      name: "Adnan"
  }
]

arrObj.forEach(person=>{
  console.log(`${person.name} or ${person.id}`)
})