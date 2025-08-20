"use strict";
let input = "banana";
function removeDuplicates(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (!result.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
}
let output = removeDuplicates(input);
console.log(output);
