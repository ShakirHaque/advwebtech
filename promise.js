console.log("welcome")

const prom = new Promise((resolve,reject)=>{

    let complected=true;
    if(complected)
    {
        resolve("done")
    }
    else
    reject("not done")



});
prom
.then((res)=>
{
    console.log(res)
})
.catch((rej)=>
{
    console.log(rej)
})




console.log("end")
