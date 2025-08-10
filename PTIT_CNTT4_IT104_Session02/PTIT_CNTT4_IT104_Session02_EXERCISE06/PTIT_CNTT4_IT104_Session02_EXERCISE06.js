function checkEndString(long, sort) {
  if (long.endsWith(sort)) {
    return true;
  } else {
    return false;
  }
}
console.log(checkEndString("Hello, World!", "Hello"));

console.log(checkEndString("Hi there!", "there!"));
