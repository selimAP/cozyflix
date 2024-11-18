const navMenu = document.querySelector(".navmenu");
const html = document.querySelector("html");

window.addEventListener("scroll", function(){
    let header = this.document.querySelector("header");

    header.classList.toggle('sticky', window.scrollY > 0);
});
