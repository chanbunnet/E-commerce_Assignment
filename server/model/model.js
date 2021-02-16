const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: String,
  quantity: String,
  detail: String,
  stock: String,
  category: String,
});

const adminDB = new mongoose.model("adminname", adminSchema);

module.exports = adminDB;
