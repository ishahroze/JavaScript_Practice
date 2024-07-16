const UERL="https://cat-fact.herokuapp.com/facts";
const factpara=document.querySelector("#fact")
const btn=document.querySelector("#btn");

const getfact=async()=>{
    let response=await fetch(UERL)
    let data=await response.json();
    // @ts-ignore
    factpara.innertext=data[2].text;
};
btn?.addEventListener("click",getfact)