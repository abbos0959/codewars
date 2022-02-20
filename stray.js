function stray(numbers) {
    let arr = numbers.sort();
    if (arr[0] !== arr[1]) {
      console.log(arr[0]);
    } else {
      console.log( arr[arr.length - 1]);
    }
  }
  stray([1,1,1,12,1,1,1])