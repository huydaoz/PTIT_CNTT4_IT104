function processInput(input: string | number | boolean): void {
  if (typeof input === "string") {
    if (/^\d+$/.test(input)) {
      const num = Number(input);
      console.log(num * num);
    } else {
      const letterCount = (input.match(/[a-zA-Z]/g) || []).length;
      console.log(`${letterCount} ký tự chữ cái`);
    }
  } else if (typeof input === "number") {
    if (isPrime(input)) {
      console.log("Là số nguyên tố");
    } else {
      console.log("Không phải số nguyên tố");
    }
  } else if (typeof input === "boolean") {
    if (input) {
      console.log("Giá trị là true - tiến hành xử lý");
    } else {
      console.log("Giá trị là false - dừng xử lý");
    }
  }
}

function isPrime(num: number): boolean {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

processInput("123");
processInput("abc123!");
processInput(7);
processInput(10);
processInput(true);
processInput(false);
