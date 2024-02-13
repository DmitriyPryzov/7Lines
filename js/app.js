"use strict"



const burgerMenu = document.querySelector(".burger-menu");
const headerMenu = document.querySelector(".header-menu");

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    headerMenu.classList.toggle("active");
    document.body.classList.toggle("active");
});

new WOW().init();
// const image = document.querySelector('.welcome-text-box');
// new simpleParallax(image);
// console.log(new simpleParallax(image));
baguetteBox.run(".works-container");