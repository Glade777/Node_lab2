console.log("ROUTES FILE LOADED:", __filename);
const express = require("express");
const router = express.Router();
const path = require("path");

//статична сторінка
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

//тут буде ендпоінт динамічної сторінки res.render
router.get("/info", (req, res) => {

  const Students = [
    {
      group: "ІС-43",
      name: "Анна",
      major: "ІСтаТ",
    },
    {
      group: "ІС-43",
      name: "Дмитро",
      major: "ІСтаТ",
    },
    {
      group: "ІС-41",
      name: "Софія",
      major: "ІСтаТ",
    },
    {
      group: "ІС-41",
      name: "Дарія",
      major: "ІСтаТ",
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
