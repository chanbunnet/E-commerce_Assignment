const express = require("express");
const route = express.Router();

const controller = require("../controller/controller");

route.get("/", controller.homepage);
route.get("/admin", controller.homeRoutes);

route.get("/add-product", controller.add_user);

route.get("/update-product", controller.update_user);

route.post("/api/admin", controller.create);
route.get("/api/admin", controller.find);
route.put("/api/admin/:id", controller.update);
route.delete("/api/admin/:id", controller.delete);

module.exports = route;
