var emp=newArray();
emp[0]="meera";
emp[1]="anu";

function pushData() 
{
    emp.push("anu")
    printData()
}
function popData()
{
    emp.pop()
    printData()
}
function printData() {
    for(var i=0;i<emp.length;i++){
        console.log(emp[i])
    }
}
