console.log("Stageverslag CrossmarX");

var menu = document.querySelector("header nav ul");
var nav = document.querySelector("header nav");
var deButton = document.querySelector(".nav-btn");
var deNav = document.querySelector(".nav-menu");
/*************/

function toonMenu() {
	deNav.classList.toggle("menuOpen");
    menu.classList.toggle("show-menu");
    nav.classList.toggle("overflow");
}
deButton.addEventListener("click", toonMenu);
