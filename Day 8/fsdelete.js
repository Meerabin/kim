const fs=require('fs')
fs.unlink("asd.txt",function(err)
{
    if(err){
        console.log("err",err)
        return
    }
    console.log("Sucessfully deleted")
})