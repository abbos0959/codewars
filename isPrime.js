const isPrime = (num) => {
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      return console.log(false);
    }
  }
  console.log(true);
};
isPrime(17);
