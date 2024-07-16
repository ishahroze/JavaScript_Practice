
//Promise
//A Javascript Promise object can be
//Pending : The result is undefined
//Resolved : The result is a value(fulfilled)
//Rejected : the result is an error object

//Practical use of promises
//There are two methods .then() & .catch()
//promise.then((res)=>{....})
//promise.then((err)=>{....})
const getPromise=()=>{
    return new Promise((resolve,reject)=>{
console.log("I am promise")
resolve("success")//if there resolve then promise.then if reject then promise.catch
    })
}
let promise=getPromise();
promise.then(()=>{
    console.log("Promise Accepted")
})
promise.catch(()=>{
    console.log("request rejected")
}
)
function Asynchoronous1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1")
            resolve("success");
        },400)
    })
}
function Asynchoronous2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2")
            resolve("success");
        },400)
    })
}
console.log("fetching data1")
let p1=Asynchoronous1();
p1.then((res)=>{
console.log(res)
})
console.log("fetching data2")
let p2=Asynchoronous2();
p2.then((res)=>{
console.log(res)
})
//if we run it in this way it will give result of both function 1 and 2 at one instant of time but we want result of 1
//result of 2 after 4 seconds so we will do in this way
function Asynchoronous3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1")
            resolve("success");
        },400)
    })
}
function Asynchoronous4(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2")
            resolve("success");
        },400)
    })
}
console.log("fetching data4")
let p3=Asynchoronous3();
p3.then((res)=>{
console.log(res)
console.log('fetching data4');
let p4=Asynchoronous4();
p4.then((res)=>{
    console.log(res)
})
})


//Asynch function
//Async function always returns a promise
//async function myfunction()
//await pauses the execution of its sorrounding async function until the promise is settled 
