"use strict";
/*    
      Author: Kagiso Cacius Mabusela
      Date:   2022/10/07
      Filename: script.js
*/

// Set we page width equal to screen's
// let w = window.innerWidth;
// let h = window.innerHeight;

// console.log("Kenny G");
// console.log(w);

// let html = document.querySelector("html");

// html.style.width = html.scrollWidth + "px";
// html.style.height = html.scrollHeight + "px";
// console.log(html);

// console.log(html.style.width);






// HAMBURGER ICON AND NAV MENU
if(document.getElementsByClassName("hamburger-icon") !== null) {
    const menuIcon = document.querySelector(".hamburger-icon");
    const navMenu = document.querySelector(".nav-menu");


    menuIcon.addEventListener("click", ()=> {
        menuIcon.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", ()=> {
        menuIcon.classList.remove("active");
        navMenu.classList.remove("active");
    }));
}



// CUSTOMER REVIEWS SLIDESHOW
// if(document.getElementById("checkCust") !== null) {
    
// }

var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function currentDiv(n) {
        showDivs(slideIndex = n);
    }

    function showDivs(n) {
        var i;
        var slides = document.getElementsByClassName("slide");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1};
        if (n < 1) {slideIndex = slides.length};
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" fill", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " fill";
    }