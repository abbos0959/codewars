function Fib(n){
    if(n<3){
     return n-1
    }
    else{
      return  Fib(n-1)+Fib(n-2)
        
    }

}
console.log(Fib(10));
