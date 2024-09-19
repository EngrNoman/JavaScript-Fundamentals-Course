const fetch1 = fetch('https://api.example.com/data1').then(response => response.json());
const fetch2 = fetch('https://api.example.com/data2').then(response => response.json());

Promise.all([fetch1,fetch2])
.then(result =>{
  console.log('Data 1 :' ,result[0])
  console.log('Data 2 :' ,result[1])

})
.catch(error => console.error('Error' , error))