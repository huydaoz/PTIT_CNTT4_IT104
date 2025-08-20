function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const person = { name: "Huy", age: 20 };
const job = { title: "Developer", salary: 5000 };
const merged = merge(person, job);
console.log(merged);
