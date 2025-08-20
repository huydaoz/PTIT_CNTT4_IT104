function reverseArray<T>(arr: T[]): T[] {
  return arr.slice().reverse();
}

const numbers = [1, 2, 3];
const Numbers = reverseArray(numbers);
console.log(Numbers);

const strings = ["a", "b", "c"];
const Strings = reverseArray(strings);
console.log(Strings);
