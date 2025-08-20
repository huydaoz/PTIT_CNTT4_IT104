function parseToNumber(value: string): number | null {
  const num = Number(value);
  return isNaN(num) ? null : num;
}

function add(a: number, b: number): number {
  return a + b;
}
function subtract(a: number, b: number): number {
  return a - b;
}
function multiply(a: number, b: number): number {
  return a * b;
}
function divide(a: number, b: number): number | string {
  return b === 0 ? "Không thể chia cho 0" : a / b;
}
function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}
function sqrt(base: number, root: number): number | string {
  return root === 0 ? "Không thể tính căn bậc 0" : Math.pow(base, 1 / root);
}
function factorial(n: number): number | string {
  if (n < 0 || !Number.isInteger(n))
    return "Giai thừa chỉ áp dụng cho số nguyên không âm";
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

function handleCalc(operation: string) {
  const input1 = (document.getElementById("input1") as HTMLInputElement).value;
  const input2 = (document.getElementById("input2") as HTMLInputElement).value;
  const num1 = parseToNumber(input1);
  const num2 = parseToNumber(input2);
  let result: number | string = "";

  if (operation === "fact") {
    if (num1 === null) result = "Giá trị không hợp lệ cho giai thừa";
    else result = factorial(num1);
  } else {
    if (num1 === null || num2 === null) {
      result = "Giá trị nhập vào không hợp lệ";
    } else {
      switch (operation) {
        case "add":
          result = add(num1, num2);
          break;
        case "sub":
          result = subtract(num1, num2);
          break;
        case "mul":
          result = multiply(num1, num2);
          break;
        case "div":
          result = divide(num1, num2);
          break;
        case "pow":
          result = power(num1, num2);
          break;
        case "sqrt":
          result = sqrt(num1, num2);
          break;
      }
    }
  }

  (
    document.getElementById("result") as HTMLElement
  ).innerText = `Kết quả: ${result}`;
}
