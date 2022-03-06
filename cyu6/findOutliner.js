function findOutlier(integers){
    for(i=0;i<integers.length;i++){
      if(integers[i]<2){
        return false
      }
      else if(integers[i]%i===0){
        return false
      }
      else if(integers[i]%2==0){
        return integers[i]
      }
      else{
        return integers[i]
      }
    }
    
    
  }
  console.log(findOutlier([1,2,4,6,8]));