# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from [here](https://github.com/lighthouse-labs/snek-multiplayer). 

## Final Product

!["Server on with no connection"](./pictures/server-on-no-connections.png)
!["A player's connection with the server"](./pictures/connection-with-server.png)
!["Player's terminal when connection is made"](./pictures/players-terminal-when-connected.png)
!["Player's connection when it dies from idling"](./pictures/players-terminal-when-dead.png)


## Getting Started

- Follow steps inside the snek server repo to run the server side.
- Run the development snake client using the `node play.js` command.
- You can see the rules of the game [here](https://en.wikipedia.org/wiki/Snake_(video_game_genre)).
- To play the game you can more up, down, left, right by pressing w, s, a, d, respectively.
- To send any of the following formulated messages 'hello', 'goodbye', 'you idiot', 'out of my way chump' press h, g, i, o, respectively.
- To send a custom message first press ctrl + a then type your message. Once you're ready to send the message press ctrl + x. `BEWARE`: you will be idling while typing the message so type and send it fast to avoid death.