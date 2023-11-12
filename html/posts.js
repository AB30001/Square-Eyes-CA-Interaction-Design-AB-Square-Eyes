import { apiUrl } from "./constants.js";


export async function getMovies() {
    const response = await fetch(apiUrl);
    const movies = await response.json();
    return movies;
    
}

export async function getMovie(id) {
    const response = await fetch(apiUrl + id); 
    const movie = await response.json();
    return movie;
  }





