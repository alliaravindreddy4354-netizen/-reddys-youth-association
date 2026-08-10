// RYA GUVVALEGI WEBSITE
// Main website interactions

document.addEventListener("DOMContentLoaded", function () {

  // Mobile menu
  const nav = document.querySelector("nav");

  const menuButton = document.createElement("button");
  menuButton.innerHTML = "☰";
  menuButton.className = "mobile-menu-button";

  const header = document.querySelector(".header");

  if (header && nav) {
    header.insertBefore(menuButton, nav);

    menuButton.addEventListener("click", function () {
      nav.classList.toggle("mobile-open");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("mobile-open");
      });
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      nav &&
      !nav.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      nav.classList.remove("mobile-open");
    }
  });

  // Contact form
  const contactForm = document.querySelector("form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      alert(
        "Thank you for contacting Reddys Youth Association – Guvvalegi."
      );

      contactForm.reset();
    });
  }

  // Gallery placeholder interaction
  const galleryBoxes = document.querySelectorAll(".gallery-box");

  galleryBoxes.forEach(function (box) {
    box.addEventListener("click", function () {
      alert(
        "The RYA Photos & Videos Library will be added here."
      );
    });
  });

});
