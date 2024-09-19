fetch('https://jsonplaceholder.typicode.com/posts',{
  method : 'POST',
  headers : {
    'Content-Type' : 'application/json'
  },
  body : JSON.stringify({
    userName : 'Noman',
    password : 'noman123'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))
