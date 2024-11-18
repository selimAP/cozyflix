const navMenu = document.querySelector(".navmenu");
const html = document.querySelector("html");

window.addEventListener("scroll", function(){
    let header = this.document.querySelector("header");

    header.classList.toggle('sticky', window.scrollY > 0);
});



//Search function

const searchInput = document.querySelector('.search-input');
const movies = document.querySelectorAll('.movie');
const categories = document.querySelectorAll('.category-title');
const searchContainer = document.querySelector('.search-container');
const mainFront = document.querySelector('.picture-center');

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('.search-input');
    const movies = document.querySelectorAll('.movie');
    const categories = document.querySelectorAll('.category-title');

    searchInput.addEventListener('input', function(event) {
        const searchText = event.target.value.toLowerCase().trim();

        // Zuerst alle Kategorien ausblenden
        categories.forEach(category => {
            category.style.display = 'none';
        });

        movies.forEach(movie => {
            const title = movie.getAttribute('data-title').toLowerCase();

            if (title.includes(searchText)) {
                movie.style.display = 'block';
                // Die Kategorie dieser Filme anzeigen
                const category = movie.closest('.movie-center').previousElementSibling;
                category.style.display = 'block';
            } else {
                movie.style.display = 'none';
            }
        });
    });
});


function resetSearch() {
    searchInput.value = '';
    categories.forEach(category => {
        category.style.display = 'block';
    });
    movies.forEach(movie => {
        movie.style.display = 'block';
    });
}

function searchClick() {
    searchContainer.style.display = 'flex';
    mainFront.style.display = 'none';
    searchInput.focus();

    document.addEventListener('click', function(event) {
        if (document.activeElement !== searchInput) {
            searchContainer.style.display = 'none';
            mainFront.style.display = 'flex';
            resetSearch();
        }
    });
}

