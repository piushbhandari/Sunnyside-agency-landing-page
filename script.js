const menuBar = document.querySelector(".header__nav-links");
const menuBtn = document.querySelector(".header__mobile-menubtn");

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  menuBar.classList.toggle("active");
});
