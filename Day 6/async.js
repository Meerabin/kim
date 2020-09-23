function getdata(){
    return new Promise(
        resolve=>{
            setTimeout(()=>{
                resolve("Resolved Data")
                ,2000});
            })
}
async function getAsyncData(){
    console.log("Reached")
    const result=await getdata()
    console.log(result)
}
getAsyncData()