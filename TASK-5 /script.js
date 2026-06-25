const navbar = document.getElementById("navbar");
const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

// Navbar shadow on scroll
window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

// Mobile menu
menu.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});

// Close menu when a navigation link is clicked
const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link){

    link.addEventListener("click",function(){

        navLinks.classList.remove("active");

    });

});

// Fade-in animation on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

},{
    threshold:0.2
});

sections.forEach(function(section){

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});