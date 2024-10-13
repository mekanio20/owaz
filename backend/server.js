const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const helmet = require("helmet");
const fs = require("fs");
const path = require("path");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5055;
const ip = "localhost";

require("./config/models");
const database = require("./config/database");
const router = require("./routers/index");

app.disable("x-powered-by");
app.use(cors())
app.use(helmet());

let accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), { flags: "a" });
app.use(morgan("common", { stream: accessLogStream }));
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("public"));

app.use("/api", router);
app.all("*", (req, res) => {
  return res
    .status(404)
    .sendFile(`${path.join(__dirname + "/public/404.html")}`);
});

app.listen(port, async () => {
  try {
    await database.authenticate();
    await database.sync({});
    console.log("Database connected...");
    console.log(`Server is running: http://${ip}:${port}`);
  } catch (error) {
    throw error;
  }
});
