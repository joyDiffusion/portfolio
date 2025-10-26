// Toggle the mobile navigation menu
const menuOpenBtn = document.getElementById("mobile-open-btn");
const menuCloseBtn = document.getElementById("mobile-close-btn");
const mobileMenu = document.getElementById("mobile-menu");

// When hamburger is clicked, show the menu
menuOpenBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("-translate-y-full");
  mobileMenu.classList.add("translate-y-0");
});

// When the close button is clicked, hide the menu
menuCloseBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-y-0");
  mobileMenu.classList.add("-translate-y-full");
});

// Copyright output
const footerCopyright = document.getElementById("footer-copyright");
const copyrightSymbol = "\u00A9";
const d = new Date();

if (footerCopyright) {
  footerCopyright.innerHTML =
    copyrightSymbol +
    " Copyright " +
    d.getFullYear() +
    " Joe Inthasone. <br>All rights reserved.";
}
