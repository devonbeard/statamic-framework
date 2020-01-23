// Mobile Menu Interaction
var htmlBody = document.querySelector("body");
var mobileMenuButton = document.querySelector(".js-mobile-menu-button");
var mobileMenuClose = document.querySelector(".js-mobile-menu-close");
var mobileMenu = document.querySelector(".js-mobile-menu");

mobileMenuButton.addEventListener("click", function() {
  // Force page to not scroll, only mobile menu
  htmlBody.classList.add("overflow-hidden");

  // Add active state to mobile menu
  mobileMenu.classList.add("is-active");
});

mobileMenuClose.addEventListener("click", function() {
  // Force page to not scroll, only mobile menu
  htmlBody.classList.remove("overflow-hidden");

  // Remove active state to mobile menu
  mobileMenu.classList.remove("is-active");
});
