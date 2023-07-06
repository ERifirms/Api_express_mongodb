module.exports = (app) => {
  const orders = require("../controllers/order.controllers");
  const router = require("express").Router();

  router.get("/user/:id", orders.findOrder);
  router.post("/user/:id/add", orders.addToCard);

  app.use("/api/orders", router);
};
