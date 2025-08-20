function mergeAndSort(arr1, arr2) {
  const merged = [...arr1, ...arr2];
  return merged.sort((a, b) => a - b);
}
const result = mergeAndSort([1, 2, 3, 5, 9], [4, 6, 7, 8]);
console.log(result);
