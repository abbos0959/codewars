const lastDigit=(n,d)=>{
    
    
  let b = n.toString()
  let abbos=b.split("").reverse().join("").substring(0,d).split("").map((i)=>Number(i)).reverse()
    console.log( ( abbos));
    

}
lastDigit(1234,2)
