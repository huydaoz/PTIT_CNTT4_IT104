"use strict";
let num1 = 20;
let num2 = 5;
let num3;
let num4 = "10";
let num5 = true;
num3 = num1 + num2;
console.log("Cộng:", num3);
num3 = num1 - num2;
console.log("Trừ:", num3);
num3 = num1 * num2;
console.log("Nhân:", num3);
num3 = num1 / num2;
console.log("Chia:", num3);
let result = num4 + num5;
console.log("num4 + num5 =", result);
/*
Giải thích:
- Trong JavaScript/TypeScript, toán tử `+` với một chuỗi sẽ ép kiểu các toán hạng còn lại thành chuỗi.
- num4 là string "10"
- num5 là boolean true -> được chuyển thành "true"
*/
