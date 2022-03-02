function order(words){
  
    console.log( words.split(' ').sort(function(a,b){
      return a.match(/\d/) - b.match(/\d/);
    }).join(' '));
  }
  order("sal5om qa8le uk2am")