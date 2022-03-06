function order(words){
  
    console.log( words.split(' ').sort(function(a,b){
      return a.match(/[1-9]/gi) - b.match(/[1-9]/gi);
    }).join(' '));
  }
  order("sal5om qa8le uk2am")