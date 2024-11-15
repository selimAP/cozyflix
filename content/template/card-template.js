const navMenu = document.querySelector(".navmenu");
const html = document.querySelector("html");

window.addEventListener("scroll", function(){
    let header = this.document.querySelector("header");

    header.classList.toggle('sticky', window.scrollY > 0);
});


// sub-menu open function
let subMenu = document.getElementById('subMenu');

function menuToggle(){
    subMenu.classList.toggle('menu-open');
}


function subMenuAlert(){
    alert("Don't go away 🙃");
}