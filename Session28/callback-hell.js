function callBack1(cb) {
  setTimeout(() => {
    console.log("Lay du lieu cb1");
    cb();
  }, 1000);
}

function callBack2(cb) {
  setTimeout(() => {
    console.log("Lay du lieu cb2");
    cb();
  }, 1000);
}
function callBack3(cb) {
  setTimeout(() => {
    console.log("Lay du lieu cb3");
    cb();
  }, 1000);
}

function run() {
  callBack1(() => {
    callBack2(() => {
      callBack3();
    });
  });
}

run();
