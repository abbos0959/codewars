const isVeryEvenNumber = (n) => {
  let abbos = n
    .toString()
    .split("")
    .map((a) => Number(a));
  salom = abbos.reduce((a, b) => {
    return a + b;
  }, 0);

  
  if (salom >= 10) {
    salom = salom
      .toString()
      .split("")
      .map((b) => Number(b))
      .reduce((a, b) => {
        return a + b;
      }, 0);
    if (salom % 2 == 1) {
      console.log(salom, "is odd");
    } else {
      console.log(salom, "is even");
    }
    
  } else {
    if (salom % 2 == 1) {
      console.log(salom, "is edd");
    } else {
      console.log(salom, "is even");
    }
  }
};
isVeryEvenNumber(289);

