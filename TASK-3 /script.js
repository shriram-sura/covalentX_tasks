const navbar = document.getElementById("navbar");
const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll",function(){

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }

});

menu.addEventListener("click",function(){

    navLinks.classList.toggle("active");

});