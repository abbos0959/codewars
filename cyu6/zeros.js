function zeros(n) {
    var result = 0;
    while (n = Math.floor(n / 5))
      result =result+ n;
    return result;
}
console.log(zeros(30));