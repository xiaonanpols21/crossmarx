//Startscherm mobiel
var startBtn1 = document.querySelector("#start-btn-1");
var startBtn2 = document.querySelector("#start-btn-2");
var startBtn3 = document.querySelector("#start-btn-3");

var shapes = document.querySelector("#startImg img:first-of-type");
var startImg = document.querySelector("#startImg img:last-of-type");
var startText = document.querySelector("#startText");

var dot1 = document.querySelector("#dot-1");
var dot2 = document.querySelector("#dot-2");
var dot3 = document.querySelector("#dot-3");

var main = document.querySelector("main");
var secMobile = document.querySelector(".mobiel-start");

//Desktop nav
var navHome = document.querySelector(".desk-nav ul li:first-of-type a");
var langBtn = document.querySelector("#langBtn");
var langDrop = document.querySelector("#dropDown");
var langEng = document.querySelector("#dropDown li:first-of-type");

//secMobile.classList.add("none");
/***********************************************/

// Startscherm mobiel
startBtn2.classList.add("none");
startBtn3.classList.add("none");

dot1.classList.add("dot-active");

main.classList.add("none");

function goStart2() {
    startBtn2.classList.remove("none");
    startBtn1.classList.add("none");
    dot1.classList.remove("dot-active");
    dot2.classList.add("dot-active");
    startText.textContent = "Build your applications with high confidence and trust. Connect with others who share your views and ambitions for support and inspiration";
    startImg.src="img/cover-2.png";
    startImg.classList.add("start2ImgStyle");
}
startBtn1.addEventListener("click", goStart2);

function goStart3() {
    startBtn3.classList.remove("none");
    startBtn2.classList.add("none");
    dot2.classList.remove("dot-active");
    dot3.classList.add("dot-active");
    startText.textContent = "The CrossmarX Application Platform enables you and your customers to grow your business";
    startImg.src="img/cover-3.png";
}
startBtn2.addEventListener("click", goStart3);

function goHome() {
    main.classList.remove("none");
    secMobile.classList.add("none");

}
startBtn3.addEventListener("click", goHome);

// Desktop nav
navHome.classList.add("navSelect");
langDrop.classList.add("none");
langEng.classList.add("langSelected");

function showLangDrop() {
    langDrop.classList.toggle("none");
}
langBtn.addEventListener("click", showLangDrop);