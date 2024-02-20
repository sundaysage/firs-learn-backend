var p = new Promise((resolve, reject) => {

    setTimeout(() => {
        let processIsdone = true ;
        if (processIsdone){
            resolve("done")
        }else{
            reject("not done ")
        }
    }, 3000);
    
});
p.then(message =>{
    console.log(message)
})
p.catch(error => {
    console.log(error)
})

// now resovle method is used when the promise is achieved  
//while
//recject method used when every the promise fail 
//to compelect it also display the error message for the the system