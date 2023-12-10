


import { moviesPage } from "./movies.js";
import { moviePage } from "./movie.js"; 


if (location.pathname.includes("movies")) { 
    moviesPage();
} else if (location.pathname.includes("movie")) { 
    moviePage();
}



const loading = document.querySelector(".loader");

setTimeout(function() {
    loading.innerHTML = "Done loading!";
    
    
    setTimeout(function() {
        loading.style.display = "none";
    }, 1000);
}, 2000);

