function findElement<T>(arr: T[], value: T): T | undefined {
  return arr.find((item) => item === value);
}

const numberz = [25, 6, 20, 6];
console.log(findElement(numberz, 25));
console.log(findElement(numberz, 2006));

const stringz = ["huy", "duy", "tiến"];
console.log(findElement(stringz, "huy"));
console.log(findElement(stringz, "khánh"));
