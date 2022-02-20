const seven = (n) => {
  let count = 0;
  while (n > 99) {
    n = Math.floor(n /10) - 2 * (n % 10);
    ++count;
  }
  console.log(n, count);
};
seven(13);
