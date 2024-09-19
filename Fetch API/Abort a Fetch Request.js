const controller = new AbortController();
const signal = controller.signal;

fetch('/',{signal})
.then(response => response.json())
.then(data => console.log(data))
.catch(error =>{
  if(error.name === 'AbortError'){
    console.log('Fetch Aborted')
  }
  else{
    console.error('Error' , error)
  }
})

controller.abort()