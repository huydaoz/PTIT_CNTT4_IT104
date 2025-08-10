let input: string = "banana";

function remove(str: string): string {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!result.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}

let output = remove(input);
console.log(output);
