const descendingOrder=(n)=>{
 let a=n.toString().split("").map((k)=>Number(k))
let  max=n[0]

    for (i=0;i<a.length;i++){
        for(j=1;j<a.length;j++){
            if(a[i]>a[j]){
                max=a[i]
            }
            else{
                max=a[j]
            }
        }
    }
    console.log( max);

}
descendingOrder(1234359)