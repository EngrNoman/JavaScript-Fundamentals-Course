fetch('https://jsonplaceholder.typicode.com/posts/1',{
  method: 'GET',
  headers:{
    'Authorization' : 'Bearer token123',
    'Accept' : 'application'
  }

})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))