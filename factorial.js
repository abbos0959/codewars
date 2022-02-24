const Fac=(n)=>{
    if(n<0){
        return "manfiy son"
    }
    else if(n==0){
        return 1
    }
    else{
        return n*Fac(n-1)
    }

}
console.log(Fac(6));