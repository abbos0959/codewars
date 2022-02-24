const descendingOrder=(n)=>{
    let a=n.toString().split("").map((k)=>Number(k))
   

    let b=a.sort((a,b)=>a-b).reverse().join("")
   
       console.log(parseInt(b));
   
   }
   descendingOrder(1234359)