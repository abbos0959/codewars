function sumTwoSmallestNumbers(numbers) {  
    var ordered = numbers.sort(function(a,b){return a-b;});
    var result=0;
    console.log(ordered)
    
    for(i=0; i<ordered.length; i++){
      if(i==0){
        result+=ordered[0];
      }
      if(i==1){
        result+=ordered[1];
      }
    }
     console.log(result);;
  //Code here
  };
  sumTwoSmallestNumbers([1,3,5,9,9,7,4])