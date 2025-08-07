function sumArrays(...arrays) {
  const result = arrays.map((arr) => {
    return arr.reduce((sum, value) => sum + value, 0);
  });
  return result;
}

console.log(sumArrays([1, 2], [6, 7, 8], [12, 8]));
