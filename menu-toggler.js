
const navToggler = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-links");

function hamburgerMenu(){
    navToggler.classList.toggle("active");
    navMenu.classList.toggle("active")
}

navToggler.addEventListener("click", hamburgerMenu);