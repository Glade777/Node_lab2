const express = require("express");
const app = express();
const fs = require("fs");
const dotenv = require("dotenv");
const router = require("./routes/routes");
dotenv.config();
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 8080;

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is listened on port ${PORT}`);
});
//http://localhost:8080/