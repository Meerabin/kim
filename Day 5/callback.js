var maths=30
var english=40
var malayalam=45
function total(callback){
    setTimeout(()=>{
        callback(maths+english+malayalam)
    },2000);
    
}
function average(){
    total(function(total){
   console.log( total/3)
})
}
average()