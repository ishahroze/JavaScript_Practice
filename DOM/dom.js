// @ts-nocheck
/*
DOM:
<h1 id =3><h1>
to get it by id we have to do this headind= document.getElementById("3")
to get it by ClassName we have to do this class=document.getElementByClassName("3")
to get elements ny tagname
to get it by tags we have to do this paragraph=document.getElementByTagName("p")

Another Method
Query Selector
To select only first element
let firstelement=document.queryselector("p") 1st element
let allelements=document.queryselectorall("p") All elements

To Access by classnames

let  allEl=document.querySelectorAll(".Classname")

by ID

let el=document.querselector("#idName")

DOM Manipulation:

TagName : Returns TagName for element Nodes
heading=document.queryselector("h1")
heading.innertext="new heading "for changing text
heading.innerhtml="<i>new heading" for adding html
innertext:returns the textcontent of the elements and all its childrens


*/
let div=document.querySelector("div")
console.log(div)
let id=div?.getAttribute("id")
console.log(id)
//For Styling 
div.style.backgroundColor="black ";
div.style.fontSize="36px";
div.style.color="white"

//To Create element

//To Create Button

let newbtn=document.createElement