const dns=require ('dns')
dns.lookup('www.google.com',(err,address)=>
{
    if(err)
    console.log("err",err)
   console.log("add",address) 
})