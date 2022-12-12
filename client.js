const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: '50541'
  });

  conn.on('connect', () => { console.log('Successfully connected to game server'); })

  conn.on("connect", () => {
    conn.write(`Name: ${Math.random().toString(36).slice(2, 5)}`);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", function (data) { console.log(data); });

  return conn;
};

module.exports = { connect }