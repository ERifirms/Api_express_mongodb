module.exports = (app) => {
  const product = require("../controllers/product.controllers");
  const router = require("express").Router();

  router.get("/", product.findAll);

  app.use("/api/products", router);
};
