const egg = new Promise( (resolve, reject)=>{
    console.log("Yes its an Egg");
   //resolve("Sucessfully hatched") 
   reject("its a broken egg")
});

egg 
.then(resp=>{
    console.log("then");
    console.log(resp);    
})

.catch( err=>{console.log(err);
}
)