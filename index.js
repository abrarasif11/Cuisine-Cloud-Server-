const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
// Middleware

app.use(cors());
app.use(express.json());

//Listen Server
app.get("/", (req, res) => {
  res.send("Cuisine Cloud server is running");
});

app.listen(port, () => {
  console.log(`Cuisine Cloud server Server is running on PORT:${port}`);
});
