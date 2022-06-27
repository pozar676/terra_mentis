const hamburger = document.querySelector(".hamburger");
const navbarList = document.querySelector(".navbar__list");
const navbar = document.querySelector(".navbar");
const gray = document.querySelector(".asibility__gray");
const dark = document.querySelector(".asibility__dark");
const listLinks = document.querySelector(".Navbar__list--link");

const handleClick = () => {
  hamburger.classList.toggle("hamburger--active");
  navbarList.classList.toggle("navbar__list--open");
};

const asibilityGray = () => {
  document.body.classList.toggle("gray");
};

const asibilityDark = () => {
  document.body.classList.toggle("dark");

  listLinks.classList.toggle("dark");
  // for (let i = 0; i < 3; i++) {
  // }
};

// dark.addEventListener("click", asibilityDark);
// gray.addEventListener("click", asibilityGray);
hamburger.addEventListener("click", handleClick);
