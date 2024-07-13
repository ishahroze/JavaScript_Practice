/*Sychronous Programming
It runs the code in particular sequence of instructions given in the program.Each instruction waits for the previous instructions to complete its execution

Asynchoronous
For Example there is an API at the start of program .If program has to run sequence wise then it will delay it as Api can take one or more than one second so to avoid this we use asychcronous 
*/
console.log("one")
setTimeout(()=>{
    console.log("hello");
},4000);//it will run program after 2s of program exectution
console.log("three") //it will not execute after two seconds it will run immediately 