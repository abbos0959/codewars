function isIsogram(str){ 
    console.log( !/(\w).*\1/i.test(str))
  }
  
  isIsogram("abos")