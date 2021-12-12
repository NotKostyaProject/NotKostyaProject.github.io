const burgerButton = document.getElementById("burger_btn");
const burgerMenu = document.getElementById("burger_mene");
const header = document.getElementById("header");
const body = document.body;

function toggleOpenClass() {
  burgerMenu.classList.toggle("open");
  burgerButton.classList.toggle("open");
  if (burgerMenu.classList.contains("open")) {
    body.style.height = "100vh";
    body.style.overflow = "hidden";
  } else {
    body.style.height = "auto";
    body.style.overflow = "auto";
  }
}

function onScroll() {
  if (window.scrollY > 200) {
    header.style.backgroundColor = "#000000ef";
  } else {
    header.style.backgroundColor = "transparent";
  }
}

burgerButton.addEventListener("click", toggleOpenClass);
burgerMenu.addEventListener("click", toggleOpenClass);
document.addEventListener("scroll", onScroll);