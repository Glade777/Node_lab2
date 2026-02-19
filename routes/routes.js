const express = require("express");
const router = express.Router();
const path = require("path");

//статична сторінка
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//тут буде ендпоінт динамічної сторінки res.render
router.get("/info", (req, res) => {
  const Students = [
    {
      group: "IS-43",
      name: "Alice",
      major: "Computer Science",
    },
    {
      group: "IS-43",
      name: "Bob",
      major: "Mathematics",
    },
    {
      group: "IS-41",
      name: "Bob",
      major: "Mathematics",
    },
    {
      group: "IS-41",
      name: "Bob",
      major: "Mathematics",
    },
  ];

  res.render("data", { student: Students });
});

router.get("/news", async (req, res) => {
  const API_KEY = process.env.API_KEY;
  const url = `https://newsapi.org/v2/everything?q=Apple&from=2026-02-10&sortBy=popularity&apiKey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();

  if (data.status === "ok") {
    const articles = data.articles;
    res.render("news", { articles: articles });
  }
});

module.exports = router;
