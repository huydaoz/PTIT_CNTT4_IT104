let phoneBooks = [];

function addContact(name, phone, email) {
  phoneBooks.push({ name, phone, email });
}
function displayContact() {
  phoneBooks.forEach((element) => {
    console.log(`
        ${element.name},
        ${element.phone},
        ${element.email}`);
  });
}
addContact("huy", "0987654321", "huy@gmail.com");
addContact("duy", "0987654321", "huy@gmail.com");
addContact("khanh", "0987654321", "huy@gmail.com");

displayContact();
