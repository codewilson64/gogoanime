const menuToggle = document.querySelector(".menu-toggle");
const midNav = document.querySelector(".mid-nav");

menuToggle.addEventListener("click", function () {
  midNav.classList.toggle("active");
});
