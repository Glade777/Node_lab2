const info = document.querySelector(".info");
const news = document.querySelector(".news");

info.addEventListener("click", () => {
  window.location.href = `/info`;
});

news.addEventListener("click", () => {
  window.location.href = `/news`;
});
