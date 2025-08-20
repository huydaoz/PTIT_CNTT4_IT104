let firstName: string = "john";
let lastName: string = "doe";

function capitalize(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

firstName = capitalize(firstName);
lastName = capitalize(lastName);

let fullName: string = `${firstName} ${lastName}`;

console.log(fullName);
