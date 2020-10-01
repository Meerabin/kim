const fs=require('fs')
fs.readFile('ex.txt',(err,data) => {
    if(err){
        console.log('err',err)
    }
    console.log(data.toString())
})