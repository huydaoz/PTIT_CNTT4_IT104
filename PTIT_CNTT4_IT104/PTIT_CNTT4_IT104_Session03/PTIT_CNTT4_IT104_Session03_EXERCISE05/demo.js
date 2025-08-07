"use strict";
let firstName = "john";
let lastName = "doe";
function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}
firstName = capitalize(firstName);
lastName = capitalize(lastName);
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
