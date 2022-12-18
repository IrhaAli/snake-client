const net = require("net");
const { IP, PORT } = require("./constants");

/** Establishes a connection with the game server
 * @returns {object} returns a connection to the game server.
 */
const connect = function() {
  // establishing a connection with the game server
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding("utf8");

  // Events as soon as the connection is established
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });
  conn.on("connect", () => {
    conn.write(`Name: ${Math.random().toString(36).slice(2, 5)}`);
  });

  // Consoles any information server sends.
  conn.on("data", function(data) {
    console.log(data);
  });

  // return the connection
  return conn;
};

module.exports = { connect };