const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: '50541'
  });
  // Events as soon as the connection is established
  conn.on('connect', () => { console.log('Successfully connected to game server'); });

  conn.on("connect", () => { conn.write(`Name: ${Math.random().toString(36).slice(2, 5)}`); });


  // Events when data is received. This is when you're not moving. It doesn't have anything to do with connect. THIS IS FOR THE CASE OF IDLING
  conn.on("data", function (data) { console.log(data); });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect }