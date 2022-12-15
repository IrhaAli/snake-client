const { up, down, left, right, messageKey, sendMessage } = require('./constants');
// Set up the global variables.
let conn;
let messageKeyPressed = false;
let message = '';
const stdin = process.stdin;

/**
 * Sets up stdin to allow user to play the game.
 * @param {object} takes in the connection of a player to the game server.
 * @returns {stdin} the stdin object.
 */
const setupInput = function(connection) {
  conn = connection;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

/** Handles users inputs (spefically, ctrl + c, up (w), down (s), left (a), right (d)) and sends it to the game server.
 * @param {string} data the user inputs.
*/
const handleUserInput = function(key) {
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
      conn.write('Say: ' + message);
    }
  }
};

module.exports = { setupInput };