const express = require("express");

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models/index");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.log("Cannot connect to database!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({
    message: "Welcame to my project",
  });
});

require("./app/routes/product.route")(app);
require("./app/routes/order.route")(app);

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
