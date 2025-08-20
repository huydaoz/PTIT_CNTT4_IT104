function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const person = { name: "Huy", age: 20 };
const job = { title: "Developer", salary: 5000 };

const merged = merge(person, job);

console.log(merged);
