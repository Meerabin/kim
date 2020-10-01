const fs=require ('fs')
// fs.writeFile("asd.txt","New to nodejs",function(err)
// {
//     if(err){
//         console.log("err")
//     }
//     console.log("new file created in location",__dirname)
// })
fs.appendFile("asd.txt","hi everyone",function(err)
{
    if(err){
        console.log("err",err)
    }
    console.log("done")
})