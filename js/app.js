"use strict"
import { simpleParallax } from "../js/simpleParallax.min.js";

const burgerMenu = document.querySelector(".burger-menu");
const headerMenu = document.querySelector(".header-menu");

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    headerMenu.classList.toggle("active");
    document.body.classList.toggle("active");
});

new WOW().init();

const welcomeText = document.querySelector(".welcome__text");
new simpleParallax(welcomeText);