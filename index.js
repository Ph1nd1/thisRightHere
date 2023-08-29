const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html", "js");
// });
app.use(express.static("dist"));

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.emit("connected");

  socket.on("note played", (note) => {
    io.emit("note played", `${note}`);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
