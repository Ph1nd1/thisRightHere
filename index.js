const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const server = http.createServer(app);
var io = require("socket.io")(server);

const port = process.env.PORT || 3000;

app.use(express.static("dist"));

io.on("connection", (socket) => {
  io.emit("connection");
  socket.on("note played", (note) => {
    io.emit("note played", `${note}`);
  });
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
