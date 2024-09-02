const sidebar = document.querySelector(".sidebar");
const menuBtn = document.getElementById("menuToggle");

menuBtn.addEventListener("click", () => {
  sidebar.style.left = "0";
});

document.addEventListener("click", (event) => {
  const clickTarget = sidebar.contains(event.target) || menuBtn.contains(event.target);

  if (!clickTarget) {
    sidebar.style.left = "-200px";
  }
});
