let checkElement = (arr, num) =>
  arr.includes(num) ? console.log(true) : console.log(false);

checkElement([1, 2, 3, 4, 5], 3);
checkElement([1, 2, 3, 4, 5], 6);
