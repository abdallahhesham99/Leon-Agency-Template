const burgerButton = document.querySelector(".burger__icon");
const sideMenu = document.querySelector(".nav__links ul");
const closeButton = document.querySelector(".close__icon-parent");

burgerButton.addEventListener("click", () => {
  sideMenu.classList.add("open");
});

closeButton.addEventListener("click", () => {
  sideMenu.classList.remove("open");
});
