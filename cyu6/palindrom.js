function checkPalindrom (str) {
    if(  str == str.split('').reverse().join('')){
        return "bu so`z palindrom"
    }
    else{
        return "bu so`z palindrom emas"
    }
    
  }
  console.log(checkPalindrom("777"));