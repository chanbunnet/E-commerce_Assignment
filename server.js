const express = require("express");

const bodyparser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://bunnet123:bunnet123@cluster0.nl9dq.mongodb.net/Auth?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

app.use(bodyparser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/images", express.static(path.resolve(__dirname, "assets/images")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

app.use("/", require("./server/routes/router"));

app.listen(8080);
