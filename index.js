const abbos = (b) => {
  let bush = [];
  let salom = [];
  let sum = 0;

  for (i = 0; i < b.length; i++) {
    if (b[i] > 0) {
      bush.push(b[i]);
    } else if (b[i] < 0) {
      sum = sum + b[i];
    
    }
  }
  salom.push(bush.length, sum);
  console.log(salom);
};
abbos([1, 2, 3, 4, 5, 6, 7, -1, -2, -3, -4, -5]);
