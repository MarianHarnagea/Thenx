const hamburgerMenu = document.querySelector(".hamburger-menu");
const openMenuBtn = document.querySelector(".menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

const cartMenu = document.querySelector(".cart-menu");
const bagBtn = document.querySelector(".bag-btn");
const closeCartBtn = document.querySelector(".close-cart-btn");

const cover = document.querySelector(".cover");
const body = document.querySelector("body");

// Open - Close Menu
openMenuBtn.addEventListener("click", () => {
  hamburgerMenu.classList.add("open");
  cover.classList.add("open");
  body.classList.add("overflow");
});

closeMenuBtn.addEventListener("click", () => {
  hamburgerMenu.classList.remove("open");
  cover.classList.remove("open");
  body.classList.remove("overflow");
});
// Open - Close Menu End

// Open - Close Cart
bagBtn.addEventListener("click", () => {
  cartMenu.classList.add("open");
  cover.classList.add("open");
  body.classList.add("overflow");
});

closeCartBtn.addEventListener("click", () => {
  cartMenu.classList.remove("open");
  cover.classList.remove("open");
  body.classList.remove("overflow");
});
// Open - Close Cart End
