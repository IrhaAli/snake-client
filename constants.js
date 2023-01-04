// File with all constants in this app.
const IP = 'localhost';
const PORT = '50541';
const up = 'w';
const down = 's';
const left = 'a';
const right = 'd';
const cannedMessages = { 'h': 'hello', 'g': 'goodbye', 'i': 'you idiot', 'o': 'out of my way chump', };
const messageKey = '\u0001';
const sendMessage = '\u0018';
const moves = {[left]: 'left', [right]: 'right', [up]: 'up', [down]: 'down'};

module.exports = { IP, PORT, up, down, left, right, cannedMessages, messageKey, sendMessage, moves };