var fetch=require('node-fetch')
process.env['NODE_TLS_REJECT_UNAUTHORIZED']=0
async function main(){
    let response=await fetch('https://jsonplaceholder.typicode.com/comments')
    let user=await response.json()
    return user
}
    main().then(
        res=>{
            var ex=res.filter( x=>x.postId%2==0)
            console.log(ex)
        }
        ).catch(
            err=>{console.log(err)}
        )