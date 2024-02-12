"use strict"

const burgerMenu = document.querySelector(".burger-menu");
const headerMenu = document.querySelector(".header-menu");

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    headerMenu.classList.toggle("active");
    document.body.classList.toggle("active");
});

new WOW().init();

