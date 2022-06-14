const burgerButton = document.querySelector(".burger__icon");
const sideMenu = document.querySelector(".nav__links ul");
const closeButton = document.querySelector(".close__icon-btn");

burgerButton.addEventListener("click", () => {
  sideMenu.classList.add("open");
});

closeButton.addEventListener("click", () => {
  sideMenu.classList.remove("open");
});

//================ Remove Menu When Click on Nav Links=================================

const navLinks = document.querySelectorAll(".nav_link a");

function linkAction() {
  sideMenu.classList.remove("open");
}
navLinks.forEach((navLink) => navLink.addEventListener("click", linkAction));
