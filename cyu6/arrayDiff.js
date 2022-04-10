const arrayDiff=(a,b)=>{
    let salom=a.filter((va)=>!b.includes(va))
console.log(salom);
}
arrayDiff([1,2,3,4,5],[2,3])