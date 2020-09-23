var ev=require('events');
var em=new ev.EventEmitter();
var myString ="welcome to javascript"
var numArray=[1,2,3,5,7];
var SumOfArray=function sum(){
    var sum=0;
    numArray.forEach(x=> sum+=x)
    console.log(sum)
}
var even=function fiter_even(){
    var even=numArray.filter(x=>x%2==0)
    console.log(even)
}
var odd=function filterOdd(){
    var odd=numArray.filter(x=> x%2!==0)
    console.log(odd)
}
var findLength = function len(){
    console.log(myString.length)
}
var strreplace= function strReplace(){
    console.log("before replace",myString)
    console.log(myString.replace('javascript','node.js'))
}
em.on("numberFunctions",SumOfArray)
em.addListener("numberFunctions",even)
em.addListener("numberFunctions",odd)

em.emit('numberFunctions')
em.addListener("stringFunctions",findLength)
em.on("stringFunctions",strreplace)
em.emit("stringFunctions")


