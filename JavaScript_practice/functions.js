function myfunction(){
    console.log("hello it's function written in java script")
}
myfunction();

function message(msg){
    console.log(msg)
}

message("I Loveto practice basic concepts of programming")

function sum(x,y){
   let  s=x+y;
   return s;
}
let a=sum(2,3)
console.log(a)

//Arrow Functions
//Feature Of Modern JavaScript
const arrrow=(p , b)=>console.log(a+b);
let count=0;
function vowels(a){
    for (let i of a){
if (i==="a"||i==="e"||i==="i"||i==="o"||i==="u"){
    count++;
}
    }
    console.log("Number of vowels:",count)
}
vowels("hello world")

//CallBack Functions
let arr1=[2,5,8,9,0];
arr1.forEach((val)=>{
   console.log(val*2) 
})

//Map function

let nums=[9,8,3,1,7]

let newArr=nums.map((val)=>{
    console.log(val*3)
})

//Filter Function
let num2=[4,6,9,3,4]
let newarr2=num2.filter((val)=>{
   return val%2===0;
   
    
})
console.log(newarr2)

//Reduce Function
let arr3=[2,3,5,9]
const output=arr3.reduce((res,acc)=>{
    return res+acc
})
console.log(output)
