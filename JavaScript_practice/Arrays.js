let arr=[250,645,300,900,50]
let ind=0;
for(let ind in arr){
    console.log(ind)
    let offer=arr[ind]/10;
    arr[ind]=arr[ind]-offer;
    console.log(arr[ind])
}

//Array concatenation
let marvel=["thor","spider man","Iron Man"]
let DcHeroes=["Superman","Batman"]
let heroes=marvel.concat(DcHeroes)
console.log

//Splice method 
//splice(startindex,deletecount,newelement)
arr.splice(1,2,101,102)
console.log(arr)