const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

// const cookieParser = require("cookie-parser");
// app.use(cookieParser());

dotenv.config({ path: "./config.env" });
require("./db/conn");

app.use(express.json());

// Linking Routes
app.use(require("./router/auth"));
const PORT = process.env.PORT;

// Schema
const User = require("./models/userSchema");

// Middleware

// Port
app.listen(PORT, () => {
  console.log(`server: ${PORT}`);
});
