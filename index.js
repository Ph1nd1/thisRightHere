const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const server = http.createServer(app);
var io = require("socket.io")(server);

const port = process.env.PORT || 3000;

app.use(express.static("dist"));

var connectionsLimit = 8; // 4 ppl

io.on("connection", (socket) => {
  io.emit("connected", "Connected and listening...");

  socket.on("note played", (note) => {
    io.emit("note played", `${note}`);
  });

  if (io.engine.clientsCount > connectionsLimit) {
    socket.emit("err", "sorry, we've reached the limit of connections");
    socket.disconnect();

    return;
  }
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
