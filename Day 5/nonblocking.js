function f1(name){
    setTimeout(function(){
        console.log("F1")
        name()
},1000)
}
function f2(){
    console.log("F2")
}
function f3(){
    console.log("F3")
}
f1(function(){
f2()
f3()
})