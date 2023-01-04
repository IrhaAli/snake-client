const { cannedMessages, messageKey, sendMessage, moves } = require('./constants');
// Set up the global variables.
let conn;
const stdin = process.stdin;
let messageKeyPressed = false;
let message = '';

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
    } else if (moves[key] !== undefined) {
      conn.write(`Move: ${moves[key]}`);
    } else if (cannedMessages[key] !== undefined) {
      conn.write('Say: ' + cannedMessages[key]);
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