const lastDigit=(n,d)=>{
    
    
 console.log( [...String(n)].splice(-d,d).map(Number))
}
lastDigit(1234,3)
