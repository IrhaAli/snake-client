const { up, down, left, right, messageKey, messageLength } = require('./constants');
const readline = require('readline');
let conn;

const setupInput = function (connection) {
  conn = connection;
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
  } else if (key === up) {
    conn.write('Move: up');
  } else if (key === down) {
    conn.write('Move: down');
  } else if (key === left) {
    conn.write('Move: left');
  } else if (key === right) {
    conn.write('Move: right');
  } else if (key === messageKey) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(`What message would you like to send (can only be ${messageLength} characters)?`, (message) => {
      conn.write('Say: ' + message.slice(0, messageLength));
    });
  }
};

module.exports = { setupInput };