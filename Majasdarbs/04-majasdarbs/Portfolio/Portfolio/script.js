"use strickt"

const navbar = document.querySelector('.nav-fixed')

        window.onscroll = function() {
        
          // pageYOffset or scrollY
          if (window.pageYOffset > 0) {
            navbar.classList.add('scrolled')
          } else {
            navbar.classList.remove('scrolled')
          }
        }


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));
