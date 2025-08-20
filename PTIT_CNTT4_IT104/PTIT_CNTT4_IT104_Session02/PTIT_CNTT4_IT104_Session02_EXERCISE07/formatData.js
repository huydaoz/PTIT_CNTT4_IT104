function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
function formatDate(date) {
  var d = date.getDate();
  var m = date.getMonth() + 1;
  var y = date.getFullYear();

  d = checkTime(d);
  m = checkTime(m);
  console.log(`${d}/${m}/${y}`);
}

export { formatDate };
