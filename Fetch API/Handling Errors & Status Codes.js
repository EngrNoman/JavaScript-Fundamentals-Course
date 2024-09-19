fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => {
  if(!response.ok){
    throw new Error ('Network response not Ok' + response.statusText)
  }
  return response.json()
})
.then(data => console.log(data))
.catch(error => console.error("Error" , error))