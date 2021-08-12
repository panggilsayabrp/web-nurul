const buttonNav = document.querySelector(".button-nav");
const navMenu = document.querySelector("ul");
const navLink = document.querySelectorAll("li");

buttonNav.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    buttonNav.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    buttonNav.classList.remove("active");
    navMenu.classList.remove("active");
}