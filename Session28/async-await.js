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

async function run() {
  try {
    await getDataFromAPI1();
    await getDataFromAPI2();
    await getDataFromAPI3();
  } catch (error) {
    console.log(error);
  }
}
run();
