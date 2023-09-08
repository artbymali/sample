const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const navigation = document.querySelector(".menu");
const navLinks = document.querySelectorAll(".menu li a");

menuIcon.addEventListener("click", () => {
  navigation.classList.toggle("show-menu");
});
closeIcon.addEventListener("click", () => {
  navigation.classList.toggle("show-menu");
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.toggle("show-menu");
    console.log(link.textContent);
  });
});

function checkViewportWidth() {
  if (window.innerWidth <= 970) {
    menuIcon.style.display = "block";
    navigation.classList.remove("show-menu");
    closeIcon.style.display = "block";
  } else {
    menuIcon.style.display = "none";
    closeIcon.style.display = "none";

    navigation.classList.remove("show-menu");
  }
}

window.addEventListener("load", checkViewportWidth);

window.addEventListener("resize", checkViewportWidth);
