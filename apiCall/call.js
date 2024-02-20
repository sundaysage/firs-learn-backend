const api = "https://jsonplaceholder.typicode.com/users";
fetch(api)
.then(res => res.json())
.then(data =>{
    console.log(data)
    console.log("fetching is done")
})
.catch(err=>{
    console.log(err)
})