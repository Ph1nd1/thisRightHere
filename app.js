const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);
var io = require('socket.io')(server);

const port = 3000;

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on('note played', (note) => {
    io.emit('note played',`${note}`)
    console.log('note: ' + note);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
