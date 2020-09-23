var a=1
var b="xyz"
var c=true
var xyz=[1,2,3]
var employee={firstname: "meera" , age: 20 ,address: {place : "xyz", pin: 1245}}
var company=[
    {firstname: "abc" , age: 43,address: {place : "xyz", pin: 9845}},
{firstname: "efg" , age: 68 ,address: {place : "xjjz", pin: 17785}},
{firstname: "medfa" , age: 47 ,address: {place : "xdfz", pin: 1235}}]

company.map(x=>{
    x.age+=10
})
console.log(company)
console.log(company.filter(x=>x.age==68))

var x=company.splice(0,1)
console.log("Removed object",x)
console.log(company)



