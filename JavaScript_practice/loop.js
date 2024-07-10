//For off loop to iterate through string 
let i=0;
let str ="Java Script"
for(let i of str){
console.log("i",i);

}
//For in Loop to iterate through Object

let student = {
    name:"Shahroz",
    age:18,
    CGPA:3.01,
    isPass:true,
}
for(let i in student){
    console.log(i);
}

//Number Game Guess 

// let gamenum="25";
// let  usernum=prompt("Guess the correct Number")
// while(usernum!=gamenum){
//     usernum=prompt("Enter correct number")
// }
// console.log("congratulation")

//Template String 
let obj={
    item:"pen",
    price:10,
}
console.log(`the cost of ${obj.item} is ${obj.price}`)
