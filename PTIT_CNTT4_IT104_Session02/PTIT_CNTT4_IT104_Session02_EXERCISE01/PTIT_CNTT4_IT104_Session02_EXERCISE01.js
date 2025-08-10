function sum(arr) {
  let sum = 0;
  for (const num of arr) {
    if (num % 2 == 0) {
      sum += num;
    }
  }
  return sum;
}
console.log(sum([1, 2, 3, 4, 5, 6]));
