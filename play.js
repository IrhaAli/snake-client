const { connect } = require("./client");


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// Handles the following user input: ctrl + c, up (w), down (s), left (a), right (d)
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === "w") {
    conn.write('Move: up');
  } else if (key === "s") {
    conn.write('Move: down');
  } else if (key === "a") {
    conn.write('Move: left');
  } else if (key === "d") {
    conn.write('Move: right');
  }
};

console.log("Connecting ...");
let conn = connect();
setupInput(conn);