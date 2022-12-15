const { connect } = require("./client");
const { setupInput } = require("./input");

// Set up the connection and allow for user input.
console.log("Connecting ...");
const conn = connect();
setupInput(conn);