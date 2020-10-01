function fun1() {
    console.log("Fun1 is called")
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Function1")
        }, 1000)
    })
}
function fun2() {
    console.log("Fun2 is called")
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Function2")
        }, 1000)
    })
}
async function sequentialfun() {
    console.log("Started sequential fun")
    const f1 = await fun1()
    console.log(f1)
    const f2 = await fun2()
    console.log(f2)
}
async function concurrent() {
    console.log("Started concurrent flow")
    const f1 = fun1()
    const f2 = fun2()
    console.log(await f1)
    console.log(await f2)
}
async function parallelexe() {
    console.log("Started parallel execution")
    await Promise.all([fun1(), fun2()]).then(
        result => {
            console.log(result)
        })
}
parallelexe()
