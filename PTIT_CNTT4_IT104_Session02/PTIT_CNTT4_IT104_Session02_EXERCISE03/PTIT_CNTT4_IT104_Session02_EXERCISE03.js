let typeConsole = (type = "log") => {
  if (type == "warn") {
    console.warn(`Đây là type: ${type}`);
  } else if (type == "error") {
    console.error(`Đây là type: ${type}`);
  } else {
    console.log(`Đây là type: ${type}`);
  }
};

typeConsole("log");
typeConsole("warn");
typeConsole("error");
typeConsole();
