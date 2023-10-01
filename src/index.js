const express = require("express");
const morgan = require("morgan");
const server = express();
const router = require("./routes/index");
const PORT = process.PORT || 3001;
const { conn, User, Favorite } = require("./DB_connection");

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use(express.json());
server.use(morgan("dev"));

server.get("/", (req, res) => {
  res.send("DEMO Sequelize with Express");
});
server.use("/rickandmorty", router);

server.use("/", (req, res) => {
  res.status(404).send("Resource not found");
});

conn.sync({force: false}).then(() => {
  server.listen(PORT, () => {
    console.log("Server raised in port: " + PORT);
  });
});
