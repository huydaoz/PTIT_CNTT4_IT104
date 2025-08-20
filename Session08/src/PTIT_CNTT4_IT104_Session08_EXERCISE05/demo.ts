function findFirstEven<T extends number>(arr: T[]): T | undefined {
  return arr.find((item) => item % 2 === 0);
}

let number = [1, 3, 7, 8, 10];
console.log(findFirstEven(number));

let moreNumbers = [1, 3, 5];
console.log(findFirstEven(moreNumbers));
