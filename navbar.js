// navbar.js

document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".navbar-links");

  navbarLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.color = "#0072c6";
      this.style.fontSize = "1.2rem";
    });

    link.addEventListener("mouseleave", function () {
      this.style.color = ""; // This will reset the color to the default value specified in your CSS.
      this.style.fontSize = "";
    });
  });
});
