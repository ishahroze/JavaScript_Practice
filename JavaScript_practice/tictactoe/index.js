let boxes=document.querySelectorAll(".box")

let turn0=true;
const winningpatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button was clicked")
        if(turn0){
            // @ts-ignore
            box.innerText="0";
            turn0=false;
        }
        else{
            // @ts-ignore
            box.innerText="X";
            turn0=true;
        }
    })
})