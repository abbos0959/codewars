const modifiedSum = (a, n) => {
  let bush = [];
  for (i = 0; i < a.length; i++) {
      if(n>0){
     bush.push( Math.pow(a[i], n))
  }
else{
    return 0
}}
   let abbos=bush.reduce((s,v)=>(s+v),0)-a.reduce((a,b)=>(a+b),0)
  console.log(abbos);
};
modifiedSum([1, 2, 3], 3);
