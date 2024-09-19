async function loadData(){
    try{
      const response = await fetch('/');
      if(!response.ok){
        throw new Error("Network Error")
      }
      const data = await response.json();
      console.log(data)
    }
    catch(error){
      console.log('Error',error)
    }
}