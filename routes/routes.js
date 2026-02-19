const express = require("express");
const router = express.Router();
const path = require("path");

//статична сторінка
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//тут буде ендпоінт динамічної сторінки res.render
router.get("/info", (req, res) => {
  res.send("Yep");
});

module.exports = router;
