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
let whitelist = ['http://localhost:5050', 'http://localhost:5173'];
let corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200,
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept']
};
app.use(cors(corsOptions))
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
