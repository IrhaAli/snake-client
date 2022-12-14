const { up, down, left, right, messageKey, sendMessage } = require('./constants');
let conn;
let messageKeyPressed = false;
let message = '';
const stdin = process.stdin;

const setupInput = function (connection) {
  conn = connection;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// Handles the following user input: ctrl + c, up (w), down (s), left (a), right (d)
const handleUserInput = function (key) {
  if ((key !== messageKey) && (!messageKeyPressed)) {
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
    }
  } else {
    if (key === sendMessage) {
      messageKeyPressed = false;
      conn.write('Say: ' + message);
      message = '';
    } else {
      (key !== messageKey) ? message += key : messageKeyPressed = true;
    }
  }
};

module.exports = { setupInput };