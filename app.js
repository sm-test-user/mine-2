document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".title");
  const container = document.querySelector(".container");
  const closeBtn = document.querySelector(".close");

  title.addEventListener("click", function () {
    container.classList.add("open");
  });

  closeBtn.addEventListener("click", function () {
    container.classList.remove("open");
  });
});
