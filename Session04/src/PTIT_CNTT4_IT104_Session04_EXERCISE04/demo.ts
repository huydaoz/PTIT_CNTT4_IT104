function check(typee: string | number) {
  if (typeof typee === "string") {
    console.log(`${typee.length} ký tự`);
  }
  if (typeof typee === "number") {
    if (typee % 2 === 0) console.log("số chẵn");
    else console.log("số lẻ");
  }
}
check("huy");
check(2);
