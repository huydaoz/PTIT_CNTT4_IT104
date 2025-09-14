function getDataFromAPI1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Lay du lieu tu API 1");
      resolve();
    }, 1000);
  });
}

function getDataFromAPI2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Lay du lieu tu API 2");
      resolve();
    }, 1000);
  });
}

function getDataFromAPI3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Lay du lieu tu API 3");
      resolve();
    }, 1000);
  });
}

function run() {
  getDataFromAPI1()
    .then(() => {
      return getDataFromAPI2();
    })
    .then(() => {
      return getDataFromAPI3();
    })
    .then(() => {
      return console.log("Hoan thanh");
    })
    .catch(() => {
      return console.log("Error");
    });
}
run();
