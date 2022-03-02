const upArray=(n)=>{
    // let salom=(parseInt( n.join(""))+1).toString().split("").map((i)=>Number(i))

    
    for (i=0;i<n.length;i++){
        if(n[i]>0 && n[i]<10){
    salom=(parseInt( n.join(""))+1).toString().split("").map((i)=>Number(i))

    
        }
        else{
            salom=n
        }
    }
    console.log(salom);

}
upArray([1,-9])
