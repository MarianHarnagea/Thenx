const hamburgerMenu = document.querySelector(".hamburger-menu");
const openMenuBtn = document.querySelector(".menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

const cartMenu = document.querySelector(".cart-menu");
const bagBtn = document.querySelector(".bag-btn");
const closeCartBtn = document.querySelector(".close-cart-btn");

const cover = document.querySelector(".cover");
const body = document.querySelector(".shop-page-container");

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

cover.addEventListener("click", () => {
  cartMenu.classList.remove("open");
  hamburgerMenu.classList.remove("open");
  cover.classList.remove("open");
  body.classList.remove("overflow");
});

$(document).ready(function () {
  // Gets the video src from the data-src on each button

  var $videoSrc;
  $(".video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });

  // when the modal is opened autoplay it
  $("#myModal").on("shown.bs.modal", function (e) {
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });

  // stop playing the youtube video when I close the modal
  $("#myModal").on("hide.bs.modal", function (e) {
    // a poor man's stop video
    $("#video").attr("src", $videoSrc);
  });

  // document ready
});
