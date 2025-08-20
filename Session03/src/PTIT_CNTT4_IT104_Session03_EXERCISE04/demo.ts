// Khai báo biến string và number
let strValue: string = "2";
let numValue: number = 2;

// strValue == numValue; // true → vì "2" được ép kiểu thành 2 (số)

// strValue === numValue; // false → vì kiểu string khác number

// Giải thích:
// == cho phép ép kiểu ngầm định → "2" == 2 → true
// === yêu cầu cùng kiểu và cùng giá trị → "2" !== 2 → false
