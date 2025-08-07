"use strict";
function parseToNumber(value) {
    const num = typeof value === "string" ? Number(value) : value;
    return isNaN(num) ? null : num;
}
function add(a, b) {
    const numA = parseToNumber(a);
    const numB = parseToNumber(b);
    if (numA !== null && numB !== null) {
        return numA + numB;
    }
    return "Tham số không hợp lệ!";
}
function subtract(a, b) {
    const numA = parseToNumber(a);
    const numB = parseToNumber(b);
    if (numA !== null && numB !== null) {
        return numA - numB;
    }
    return "Tham số không hợp lệ!";
}
function multiply(a, b) {
    const numA = parseToNumber(a);
    const numB = parseToNumber(b);
    if (numA !== null && numB !== null) {
        return numA * numB;
    }
    return "Tham số không hợp lệ!";
}
function divide(a, b) {
    const numA = parseToNumber(a);
    const numB = parseToNumber(b);
    if (numA !== null && numB !== null) {
        if (numB === 0)
            return "Không thể chia cho 0!";
        return numA / numB;
    }
    return "Tham số không hợp lệ!";
}
console.log("Cộng:", add("10", 5));
console.log("Trừ:", subtract("20", "4"));
console.log("Nhân:", multiply(3, "7"));
console.log("Chia:", divide("100", "25"));
console.log("Lỗi:", add("abc", 5));
